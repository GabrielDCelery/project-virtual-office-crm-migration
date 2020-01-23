class DocumentsTemporary {
  constructor({ models, nodeModules, recordPreparator }) {
    this.models = models;
    this.nodeModules = nodeModules;
    this.recordPreparator = recordPreparator;
    this.delete = this.delete.bind(this);
    this.getNextBatchOfMails = this.getNextBatchOfMails.bind(this);
  }

  async delete({ ids, transaction }) {
    return await this.models.DocumentsTemporary.query(transaction)
      .delete()
      .whereIn('id', ids);
  }

  async getNextBatchOfMails({ limit, transaction }) {
    const dbRecords = await this.models.DocumentsTemporary.query(transaction)
      .joinRelation('document')
      .where('document.type', this.models.Documents.TYPES.MAIL)
      .limit(limit || 10)
      .eager('document.mail');

    const { flattenDbRecord, prepareDbRecordForReturn } = this.recordPreparator;

    return dbRecords.map(dbRecord => {
      const flattenedDbRecord = flattenDbRecord({
        dbRecord,
        fieldsMap: {
          document_id: 'document.id',
          document_name: 'document.name',
          document_mimetype: 'mimetype',
          document_extension: 'extension',
          document_file: 'file',
          document_type: 'document.type',
          document_size: 'size',
          document_temporary_id: 'id',
          mail_id: 'document.mail.id'
        }
      });

      return prepareDbRecordForReturn(flattenedDbRecord);
    });
  }
}

module.exports = DocumentsTemporary;
