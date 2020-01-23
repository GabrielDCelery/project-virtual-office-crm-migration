class MailsAuditTrails {
  constructor({ models, nodeModules, recordPreparator }) {
    this.models = models;
    this.nodeModules = nodeModules;
    this.recordPreparator = recordPreparator;
  }

  async createBulkCopiedToCloudService({ inserts, transaction }) {
    const { prepareRecordForDbInsert } = this.recordPreparator;
    await this.models.MailsAuditTrails.query(transaction).insert(
      inserts.map(({ mailId }) => {
        return {
          ...prepareRecordForDbInsert({ mailId }),
          event_type: this.models.MailsAuditTrails.TYPES.COPIED_TO_CLOUD_SERVICE
        };
      })
    );
  }
}

module.exports = MailsAuditTrails;
