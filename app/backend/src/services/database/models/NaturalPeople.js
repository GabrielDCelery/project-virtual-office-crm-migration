const { Model } = require('objection');

class NaturalPeople extends Model {
  static get tableName() {
    return 'natural_people';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: {
          type: 'integer'
        },
        first_name: {
          type: 'string'
        },
        last_name: {
          type: 'string'
        },
        mother_name: {
          type: 'string'
        },
        birth_date: {
          type: 'date'
        },
        permanent_address_id: {
          type: 'id'
        }
      }
    };
  }

  static get relationMappings() {
    const Addresses = require('./Addresses');
    const Documents = require('./Documents');

    return {
      permanent_address: {
        relation: Model.BelongsToOneRelation,
        modelClass: Addresses,
        join: {
          from: `${NaturalPeople.tableName}.permanent_address_id`,
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

module.exports = NaturalPeople;
