const { Model } = require('objection');

class Invoices extends Model {
  static get tableName() {
    return 'invoices';
  }

  static get PAYMENT_METHODS() {
    return {
      CASH: 'cash',
      BANK_TRANSFER: 'bank transfer'
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
        payment_amount: {
          type: integer
        },
        payment_method: {
          type: 'string',
          enum: [
            Invoices.PAYMENT_METHODS.CASH,
            Invoices.PAYMENT_METHODS.BANK_TRANSFER
          ]
        },
        creation_date: {
          type: 'date'
        },
        transfer_date: {
          type: 'date'
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
          from: `${Invoices.tableName}.id`,
          through: {
            from: `${Contracts.tableName}_${Invoices.tableName}.invoice_id`,
            to: `${Contracts.tableName}_${Invoices.tableName}.contract_id`
          },
          to: `${Contracts.tableName}.id`
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

module.exports = Invoices;
