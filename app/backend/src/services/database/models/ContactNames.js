const { Model } = require('objection');

class ContactNames extends Model {
  static get tableName() {
    return 'contact_names';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: {
          type: 'integer'
        },
        name: {
          type: 'string'
        }
      }
    };
  }

  static get relationMappings() {
    const Contacts = require('./Contacts');

    return {
      mail_senders: {
        relation: Model.HasManyRelation,
        modelClass: Contacts,
        join: {
          from: `${ContactNames.tableName}.id`,
          to: `${Contacts.tableName}.name_id`
        }
      }
    };
  }
}

module.exports = ContactNames;
