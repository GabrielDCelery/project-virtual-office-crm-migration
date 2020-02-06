const { Model } = require('objection');

class ContractsContacts extends Model {
  static get tableName() {
    return 'contracts_contacts';
  }

  static get ACTIVITIES() {
    return {
      CONTACT_EMAIL: 'contact email',
      DOCUMENT_HOLDER: 'document holder',
      MAIL_NOTIFICATION_EMAIL: 'mail notification email',
      MAIL_POSTAL_RECEIVER: 'mail postal receiver'
    };
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        contract_id: {
          type: 'integer'
        },
        contact_id: {
          type: 'integer'
        },
        activity: {
          type: 'string',
          enum: [
            ContractsContacts.ACTIVITIES.CONTACT_EMAIL,
            ContractsContacts.ACTIVITIES.DOCUMENT_HOLDER,
            ContractsContacts.ACTIVITIES.MAIL_NOTIFICATION_EMAIL,
            ContractsContacts.ACTIVITIES.MAIL_POSTAL_RECEIVER
          ]
        }
      }
    };
  }

  static get relationMappings() {
    const Contracts = require('./Contracts');
    const Contacts = require('./Contacts');

    return {
      contract: {
        relation: Model.BelongsToOneRelation,
        modelClass: Contracts,
        join: {
          from: `${ContractsContacts.tableName}.contract_id`,
          to: `${Contracts.tableName}.id`
        }
      },
      contact: {
        relation: Model.BelongsToOneRelation,
        modelClass: Contacts,
        join: {
          from: `${ContractsContacts.tableName}.contact_id`,
          to: `${Contacts.tableName}.id`
        }
      }
    };
  }
}

module.exports = ContractsContacts;
