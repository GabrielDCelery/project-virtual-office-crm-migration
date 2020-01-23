const { Model } = require('objection');

class Contacts extends Model {
  static get tableName() {
    return 'contacts';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: {
          type: 'integer'
        },
        name_id: {
          type: 'integer'
        },
        address_id: {
          type: 'integer'
        },
        is_mail_sender: {
          type: 'boolean'
        },
        is_mail_receiver: {
          type: 'boolean'
        },
        is_document_keeper: {
          type: 'boolean'
        }
      }
    };
  }

  static get relationMappings() {
    const Addresses = require('./Addresses');
    const ContactNames = require('./ContactNames');
    const Mails = require('./Mails');
    const Contracts = require('./Contracts');

    return {
      address: {
        relation: Model.BelongsToOneRelation,
        modelClass: Addresses,
        join: {
          from: `${Contacts.tableName}.address_id`,
          to: `${Addresses.tableName}.id`
        }
      },
      contact_name: {
        relation: Model.BelongsToOneRelation,
        modelClass: ContactNames,
        join: {
          from: `${Contacts.tableName}.name_id`,
          to: `${ContactNames.tableName}.id`
        }
      },
      mails: {
        relation: Model.HasManyRelation,
        modelClass: Mails,
        join: {
          from: `${Contacts.tableName}.id`,
          to: `${Mails.tableName}.sender_id`
        }
      },
      mail_receivers_contracts: {
        relation: Model.ManyToManyRelation,
        modelClass: Contracts,
        join: {
          from: `${Contacts.tableName}.id`,
          through: {
            from: `${Contracts.tableName}_mail_receivers.mail_receiver_id`,
            to: `${Contracts.tableName}_mail_receivers.contract_id`
          },
          to: `${Contracts.tableName}.id`
        }
      },
      document_keepers_contracts: {
        relation: Model.ManyToManyRelation,
        modelClass: Contracts,
        join: {
          from: `${Contacts.tableName}.id`,
          through: {
            from: `${Contracts.tableName}_document_keepers.document_keeper_id`,
            to: `${Contracts.tableName}_document_keepers.contract_id`
          },
          to: `${Contracts.tableName}.id`
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

module.exports = Contacts;
