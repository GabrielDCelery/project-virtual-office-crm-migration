const { Model } = require('objection');

class MailsAuditTrails extends Model {
  static get tableName() {
    return 'mails_audit_trails';
  }

  static get TYPES() {
    return {
      RECEIVED: 'received',
      SAVED_TO_TEMPORARY_DATABASE: 'saved to temporary database',
      COPIED_TO_CLOUD_SERVICE: 'copied to cloud service',
      EMAIL_NOTIFICATION_PENDING: 'email notification pending',
      EMAIL_NOTIFICATION_SENT_TO_LEGAL_ENTITY:
        'email notification sent to legal entity',
      ENVELOPED_FOR_POSTING: 'enveloped for posting',
      POSTED_TO_LEGAL_ENTITY: 'posted to legal entity'
    };
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: {
          type: 'integer'
        },
        mail_id: {
          type: 'integer'
        },
        event_type: {
          type: 'string',
          enum: [
            MailsAuditTrails.TYPES.RECEIVED,
            MailsAuditTrails.TYPES.SAVED_TO_TEMPORARY_DATABASE,
            MailsAuditTrails.TYPES.COPIED_TO_CLOUD_SERVICE,
            MailsAuditTrails.TYPES.EMAIL_NOTIFICATION_PENDING,
            MailsAuditTrails.TYPES.EMAIL_NOTIFICATION_SENT_TO_LEGAL_ENTITY,
            MailsAuditTrails.TYPES.ENVELOPED_FOR_POSTING,
            MailsAuditTrails.TYPES.POSTED_TO_LEGAL_ENTITY
          ]
        }
      }
    };
  }

  static get relationMappings() {
    const Mails = require('./Mails');

    return {
      mail: {
        relation: Model.BelongsToOneRelation,
        modelClass: Mails,
        join: {
          from: `${MailsAuditTrails.tableName}.mail_id`,
          to: `${Mails.tableName}.id`
        }
      }
    };
  }

  $beforeInsert() {
    const date = new Date().toISOString();

    this.created_at = date;
    this.updated_at = date;
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

module.exports = MailsAuditTrails;
