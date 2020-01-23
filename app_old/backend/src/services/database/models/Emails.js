const { Model } = require('objection');

class Emails extends Model {
  static get tableName() {
    return 'emails';
  }

  static get STATUSES() {
    return {
      ACTIVE: 'active',
      INACTIVE: 'inactive'
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
        address: {
          type: 'string'
        },
        status: {
          type: 'string',
          enum: [Emails.STATUSES.ACTIVE, Emails.STATUSES.INACTIVE]
        }
      }
    };
  }

  static get relationMappings() {
    const Contracts = require('./Contracts');

    return {
      contact_contracts: {
        relation: Model.ManyToManyRelation,
        modelClass: Contracts,
        join: {
          from: `${Emails.tableName}.id`,
          through: {
            from: `${Contracts.tableName}_contact_${Emails.tableName}.email_id`,
            to: `${Contracts.tableName}_contact_${Emails.tableName}.contract_id`
          },
          to: `${Contracts.tableName}.id`
        }
      },
      mail_notification_contracts: {
        relation: Model.ManyToManyRelation,
        modelClass: Contracts,
        join: {
          from: `${Emails.tableName}.id`,
          through: {
            from: `${Contracts.tableName}_mail_notification_${Emails.tableName}.email_id`,
            to: `${Contracts.tableName}_mail_notification_${Emails.tableName}.contract_id`
          },
          to: `${Contracts.tableName}.id`
        }
      }
    };
  }
}

module.exports = Emails;
