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
        email_id: {
          type: 'integer'
        },
        phone_id: {
          type: 'integer'
        },
        address_id: {
          type: 'integer'
        }
      }
    };
  }

  static get relationMappings() {
    const EntityNames = require('./EntityNames');
    const Emails = require('./Emails');
    const Phones = require('./Phones');
    const Addresses = require('./Addresses');

    return {
      contact_name: {
        relation: Model.BelongsToOneRelation,
        modelClass: EntityNames,
        join: {
          from: `${Contacts.tableName}.name_id`,
          to: `${EntityNames.tableName}.id`
        }
      },
      email: {
        relation: Model.BelongsToOneRelation,
        modelClass: Emails,
        join: {
          from: `${Contacts.tableName}.email_id`,
          to: `${Emails.tableName}.id`
        }
      },
      phones: {
        relation: Model.BelongsToOneRelation,
        modelClass: Phones,
        join: {
          from: `${Contacts.tableName}.phone_id`,
          to: `${Phones.tableName}.id`
        }
      },
      address: {
        relation: Model.BelongsToOneRelation,
        modelClass: Addresses,
        join: {
          from: `${Contacts.tableName}.address_id`,
          to: `${Addresses.tableName}.id`
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
