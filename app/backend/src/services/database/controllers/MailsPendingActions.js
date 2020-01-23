class MailPendingActions {
  constructor({ models, nodeModules, recordPreparator }) {
    this.models = models;
    this.nodeModules = nodeModules;
    this.recordPreparator = recordPreparator;
  }

  async findAllPendingEmailNotifications({ transaction }) {
    const dbRecords = await this.models.MailsPendingActions.query(transaction)
      .where({
        action: this.models.MailsPendingActions.ACTIONS
          .CONFIRM_SENDING_EMAIL_NOTIFICATION,
        pending: true
      })
      .eager('mail.[document, legal_entity, subject, sender]');

    const { flattenDbRecord, prepareDbRecordForReturn } = this.recordPreparator;

    return dbRecords.map(dbRecord => {
      const flattenedDbRecord = flattenDbRecord({
        dbRecord,
        fieldsMap: {
          id: 'id',
          legal_entity_name: 'mail.legal_entity.long_name',
          mail_subject: 'mail.subject.long_subject',
          mail_document_name: 'mail.document.name',
          action: 'action',
          reason: 'reason',
          created_at: 'created_at',
          updated_at: 'updated_at'
        }
      });

      return prepareDbRecordForReturn(flattenedDbRecord);
    });
  }

  async sendEmailNotificationsForReceivedMails({ ids, transaction }) {
    const records = await this.models.MailsPendingActions.query(
      transaction
    ).whereIn('id', ids);

    const mailIds = this.nodeModules.lodash
      .chain(records)
      .map(record => record['mail_id'])
      .uniq()
      .value();

    await this.models.MailsPendingActions.query(transaction)
      .whereIn('id', ids)
      .patch({
        pending: false
      });

    await this.models.MailsPendingActions.query(transaction).insert(
      mailIds.map(mailId => {
        return {
          mail_id: mailId,
          action: this.models.MailsPendingActions.ACTIONS
            .SEND_EMAIL_NOTIFICATION,
          pending: true,
          reason: this.models.MailsPendingActions.REASONS.REQUESTED_BY_USER
        };
      })
    );

    await this.models.MailsAuditTrails.query(transaction).insert(
      mailIds.map(mailId => {
        return {
          mail_id: mailId,
          event_type: this.models.MailsAuditTrails.TYPES
            .EMAIL_NOTIFICATION_PENDING
        };
      })
    );

    return true;
  }
}

module.exports = MailPendingActions;
