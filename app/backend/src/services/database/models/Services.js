const { Model } = require('objection');

class Services extends Model {
  static get tableName() {
    return 'services';
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
    const Contracts = require('./Contracts');

    return {
      contracts: {
        relation: Model.ManyToManyRelation,
        modelClass: Contracts,
        join: {
          from: `${Services.tableName}.id`,
          through: {
            from: `${Contracts.tableName}_${Services.tableName}.service_id`,
            to: `${Contracts.tableName}_${Services.tableName}.contract_id`
          },
          to: `${Contracts.tableName}.id`
        }
      }
    };
  }
}

module.exports = Services;
