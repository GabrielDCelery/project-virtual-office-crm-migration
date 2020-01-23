const { Model } = require('objection');

class LegalEntities extends Model {
  static get tableName() {
    return 'legal_entities';
  }

  static get TYPES() {
    return {
      LIMITED_LIABILITY_COMPANY: 'limited liability company',
      UNLIMITED_PARTNERSHIP: 'unlimited partnership',
      SOLE_PROPRIETORSHIPS: 'sole proprietorships'
    };
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: {
          type: 'integer'
        },
        short_name: {
          type: 'string'
        },
        long_name: {
          type: 'string'
        },
        type: {
          type: 'string',
          enum: [
            LegalEntities.TYPES.LIMITED_LIABILITY_COMPANY,
            LegalEntities.TYPES.UNLIMITED_PARTNERSHIP,
            LegalEntities.TYPES.SOLE_PROPRIETORSHIPS
          ]
        },
        registration_id: {
          type: 'string'
        },
        tax_id: {
          type: 'string'
        },
        permanent_address_id: {
          type: 'id'
        }
      }
    };
  }

  static get relationMappings() {
    const Addresses = require('./Addresses');
    const Mails = require('./Mails');

    return {
      mails: {
        relation: Model.HasManyRelation,
        modelClass: Mails,
        join: {
          from: `${LegalEntities.tableName}.id`,
          to: `${Mails.tableName}.legal_entity_id`
        }
      },
      permanent_address: {
        relation: Model.BelongsToOneRelation,
        modelClass: Addresses,
        join: {
          from: `${LegalEntities.tableName}.permanent_address_id`,
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

module.exports = LegalEntities;
