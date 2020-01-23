const { Model } = require('objection');

class Mails extends Model {
  static get tableName() {
    return 'mails';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: {
          type: 'integer'
        },
        legal_entity_id: {
          type: 'integer'
        },
        sender_id: {
          type: 'integer'
        },
        subject_id: {
          type: 'integer'
        },
        document_id: {
          type: 'integer'
        }
      }
    };
  }

  static get relationMappings() {
    const Contacts = require('./Contacts');
    const Documents = require('./Documents');
    const LegalEntities = require('./LegalEntities');
    const MailSubjects = require('./MailSubjects');
    const MailsAuditTrails = require('./MailsAuditTrails');

    return {
      legal_entity: {
        relation: Model.BelongsToOneRelation,
        modelClass: LegalEntities,
        join: {
          from: `${Mails.tableName}.legal_entity_id`,
          to: `${LegalEntities.tableName}.id`
        }
      },
      sender: {
        relation: Model.BelongsToOneRelation,
        modelClass: Contacts,
        join: {
          from: `${Mails.tableName}.sender_id`,
          to: `${Contacts.tableName}.id`
        }
      },
      subject: {
        relation: Model.BelongsToOneRelation,
        modelClass: MailSubjects,
        join: {
          from: `${Mails.tableName}.subject_id`,
          to: `${MailSubjects.tableName}.id`
        }
      },
      document: {
        relation: Model.BelongsToOneRelation,
        modelClass: Documents,
        join: {
          from: `${Mails.tableName}.document_id`,
          to: `${Documents.tableName}.id`
        }
      },
      audit_trails: {
        relation: Model.HasManyRelation,
        modelClass: MailsAuditTrails,
        join: {
          from: `${Mails.tableName}.id`,
          to: `${MailsAuditTrails.tableName}.mail_id`
        }
      }
    };
  }
}

module.exports = Mails;
