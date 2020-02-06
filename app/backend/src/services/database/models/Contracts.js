const { Model } = require('objection');

class Contracts extends Model {
  static get tableName() {
    return 'contracts';
  }

  static get SIGNATORY_TYPES() {
    return {
      MANAGER: 'manager'
    };
  }

  static get STATUSES() {
    return {
      ACTIVE: 'active'
    };
  }

  static get RENEWAL_PERIODS() {
    return {
      MONTHLY: 'monthly',
      QUARTERLY: 'quarterly',
      SEMI_ANNUALLY: 'semi-annually',
      ANNUALLY: 'annually'
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
        client_id: {
          type: 'integer'
        },
        client_signatory_id: {
          type: 'integer'
        },
        client_signatory_type: {
          type: 'string',
          enum: [Contracts.TYPES.MANAGER]
        },
        service_provider_id: {
          type: 'integer'
        },
        service_provider_signatory_id: {
          type: 'integer'
        },
        service_provider_signatory_type: {
          type: 'string',
          enum: [Contracts.TYPES.MANAGER]
        },
        renewal_fee_monthly: {
          type: 'integer'
        },
        renewal_period: {
          type: 'string',
          enum: [
            Contracts.RENEWAL_PERIODS.MONTHLY,
            Contracts.RENEWAL_PERIODS.QUARTERLY,
            Contracts.RENEWAL_PERIODS.SEMI_ANNUALLY,
            Contracts.RENEWAL_PERIODS.ANNUALLY
          ]
        },
        start_at: {
          type: 'date'
        },
        end_at: {
          type: 'date'
        },
        status: {
          type: 'string',
          enum: [Contracts.STATUSES.ACTIVE]
        }
      }
    };
  }

  static get relationMappings() {
    const ContractsContacts = require('./ContractsContacts');
    const ContractsServices = require('./ContractsContacts');
    const Invoices = require('./Invoices');

    return {
      contacts: {
        relation: Model.HasManyRelation,
        modelClass: ContractsContacts,
        join: {
          from: `${Contracts.tableName}.id`,
          to: `${ContractsContacts.tableName}.contract_id`
        }
      },
      services: {
        relation: Model.HasManyRelation,
        modelClass: ContractsServices,
        join: {
          from: `${Contracts.tableName}.id`,
          to: `${ContractsServices.tableName}.contract_id`
        }
      },
      invoices: {
        relation: Model.ManyToManyRelation,
        modelClass: Invoices,
        join: {
          from: `${Contracts.tableName}.id`,
          through: {
            from: `${Contracts.tableName}_${Invoices.tableName}.contract_id`,
            to: `${Contracts.tableName}_${Invoices.tableName}.invoice_id`
          },
          to: `${Invoices.tableName}.id`
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

module.exports = Contracts;
