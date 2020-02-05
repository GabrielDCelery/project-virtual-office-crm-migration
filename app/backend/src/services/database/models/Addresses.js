const { Model } = require('objection');

class Addresses extends Model {
  static get tableName() {
    return 'addresses';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: {
          type: 'integer'
        },
        postcode: {
          type: 'string'
        },
        city_id: {
          type: 'integer'
        },
        long_street: {
          type: 'string'
        },
        created_at: {
          type: 'string',
          format: 'date-time'
        },
        updated_at: {
          type: 'string',
          format: 'date-time'
        }
      }
    };
  }

  static get relationMappings() {
    const Cities = require('./Cities');
    const LegalEntities = require('./LegalEntities');

    return {
      city: {
        relation: Model.BelongsToOneRelation,
        modelClass: Cities,
        join: {
          from: `${Addresses.tableName}.city_id`,
          to: `${Cities.tableName}.id`
        }
      },
      legal_entities: {
        relation: Model.HasManyRelation,
        modelClass: LegalEntities,
        join: {
          from: `${Addresses.tableName}.id`,
          to: `${LegalEntities.tableName}.permanent_address_id`
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

module.exports = Addresses;
