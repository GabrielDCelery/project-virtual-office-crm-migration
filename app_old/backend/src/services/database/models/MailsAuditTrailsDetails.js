const { Model } = require('objection');

class MailsAuditTrailsDetails extends Model {
  static get tableName() {
    return 'mails_audit_trails_details';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: {
          type: 'uuid'
        },
        mails_audit_trail_id: {
          type: 'integer'
        },
        data: {
          type: 'json'
        }
      }
    };
  }

  static get relationMappings() {
    const MailsAuditTrails = require('./MailsAuditTrails');

    return {
      audit_trail: {
        relation: Model.BelongsToOneRelation,
        modelClass: MailsAuditTrails,
        join: {
          from: `${MailsAuditTrailsDetails.tableName}.mails_audit_trail_id`,
          to: `${MailsAuditTrails.tableName}.id`
        }
      }
    };
  }
}

module.exports = MailsAuditTrailsDetails;
