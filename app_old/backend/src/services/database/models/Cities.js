const { Model } = require('objection');

class Cities extends Model {
  static get tableName() {
    return 'cities';
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
        },
        county_id: {
          type: 'integer'
        }
      }
    };
  }

  static get relationMappings() {
    const Addresses = require('./Addresses');
    const Countries = require('./Countries');

    return {
      addresses: {
        relation: Model.HasManyRelation,
        modelClass: Addresses,
        join: {
          from: `${Cities.tableName}.id`,
          to: `${Addresses.tableName}.city_id`
        }
      },
      country: {
        relation: Model.BelongsToOneRelation,
        modelClass: Countries,
        join: {
          from: `${Cities.tableName}.country_id`,
          to: `${Countries.tableName}.id`
        }
      }
    };
  }
}

module.exports = Cities;
