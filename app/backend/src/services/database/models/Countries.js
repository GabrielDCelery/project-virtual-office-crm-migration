const { Model } = require('objection');

class Countries extends Model {
  static get tableName() {
    return 'countries';
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
        short_name: {
          type: 'string'
        },
        phone_code: {
          type: 'string'
        }
      }
    };
  }

  static get relationMappings() {
    const Cities = require('./Cities');
    const Phones = require('./Phones');

    return {
      cities: {
        relation: Model.HasManyRelation,
        modelClass: Cities,
        join: {
          from: `${Countries.tableName}.id`,
          to: `${Cities.tableName}.country_id`
        }
      },
      phones: {
        relation: Model.HasManyRelation,
        modelClass: Phones,
        join: {
          from: `${Countries.tableName}.id`,
          to: `${Phones.tableName}.country_id`
        }
      }
    };
  }
}

module.exports = Countries;
