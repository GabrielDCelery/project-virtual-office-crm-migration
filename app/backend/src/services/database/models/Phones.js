const { Model } = require('objection');

class Phones extends Model {
  static get tableName() {
    return 'phones';
  }

  static get STATUSES() {
    return {
      ACTIVE: 'active',
      INACTIVE: 'inactive'
    };
  }

  static get TYPES() {
    return {
      MOBILE: 'mobile',
      HOME: 'home'
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
        number: {
          type: 'string'
        },
        status: {
          type: 'string',
          enum: [Phones.STATUSES.ACTIVE, Phones.STATUSES.INACTIVE]
        },
        type: {
          type: 'string',
          enum: [Phones.TYPES.MOBILE, Phones.TYPES.HOME]
        },
        country_id: {
          type: 'integer'
        }
      }
    };
  }

  static get relationMappings() {
    const Countries = require('./Countries');
    const Contracts = require('./Contracts');

    return {
      country: {
        relation: Model.BelongsToOneRelation,
        modelClass: Countries,
        join: {
          from: `${Phones.tableName}.country_id`,
          to: `${Countries.tableName}.id`
        }
      },
      contact_contracts: {
        relation: Model.ManyToManyRelation,
        modelClass: Contracts,
        join: {
          from: `${Phones.tableName}.id`,
          through: {
            from: `${Contracts.tableName}_contact_${Phones.tableName}.phone_id`,
            to: `${Contracts.tableName}_contact_${Phones.tableName}.contract_id`
          },
          to: `${Contracts.tableName}.id`
        }
      }
    };
  }
}

module.exports = Phones;
