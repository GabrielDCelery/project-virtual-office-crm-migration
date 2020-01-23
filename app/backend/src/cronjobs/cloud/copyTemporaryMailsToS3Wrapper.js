module.exports = ({ services }) => {
  return async () => {
    const transaction = await services.get('database').createTransaction();

    const batchOfTemporaryMailsResult = await services
      .get('database')
      .execute('documentsTemporary', 'getNextBatchOfMails', {
        transaction,
        bKeepTransactionAlive: true
      });

    if (!batchOfTemporaryMailsResult.success) {
      return {
        ...batchOfTemporaryMailsResult,
        bRunAgain: true
      };
    }

    if (batchOfTemporaryMailsResult.payload.length === 0) {
      await services.get('database').commitTransaction({ transaction });
      return {
        ...batchOfTemporaryMailsResult,
        bRunAgain: false
      };
    }

    const documentsCloudInserts = [];

    for (
      let i = 0, iMax = batchOfTemporaryMailsResult.payload.length;
      i < iMax;
      i++
    ) {
      const dbRecord = batchOfTemporaryMailsResult.payload[i];
      const {
        documentExtension,
        documentFile,
        documentId,
        documentMimetype,
        documentName,
        documentSize,
        mailId
      } = dbRecord;
      const fileName = `${documentName}.${documentExtension}`;

      const uploadFileToBucketResult = await services
        .get('cloud')
        .execute('s3', 'uploadFileToMailBucket', {
          file: documentFile,
          fileName
        });

      if (!uploadFileToBucketResult.success) {
        await services.get('database').rollbackTransaction({ transaction });
        return {
          ...uploadFileToBucketResult,
          bRunAgain: true
        };
      }

      documentsCloudInserts.push({
        documentId,
        extension: documentExtension,
        mimetype: documentMimetype,
        size: documentSize,
        storageDetails: uploadFileToBucketResult.payload,
        mailId
      });
    }

    const saveCloudMailsResult = await services
      .get('database')
      .execute('documentsCloud', 'createBulk', {
        inserts: documentsCloudInserts,
        transaction,
        bKeepTransactionAlive: true
      });

    if (!saveCloudMailsResult.success) {
      return {
        ...saveCloudMailsResult,
        bRunAgain: true
      };
    }

    const mailsAuditTrailResult = await services
      .get('database')
      .execute('mailsAuditTrails', 'createBulkCopiedToCloudService', {
        inserts: documentsCloudInserts,
        transaction,
        bKeepTransactionAlive: true
      });

    if (!mailsAuditTrailResult.success) {
      return {
        ...mailsAuditTrailResult,
        bRunAgain: true
      };
    }

    const deleteTemporaryMailsResult = await services
      .get('database')
      .execute('documentsTemporary', 'delete', {
        ids: batchOfTemporaryMailsResult.payload.map(
          record => record['documentTemporaryId']
        ),
        transaction
      });

    return {
      ...deleteTemporaryMailsResult,
      bRunAgain: true
    };
  };
};
