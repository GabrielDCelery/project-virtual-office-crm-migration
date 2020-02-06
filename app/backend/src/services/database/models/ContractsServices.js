const { Model } = require('objection');

class ContractsServices extends Model {
  static get tableName() {
    return 'contracts_services';
  }

  static get SERVICE_NAMES() {
    return {
      SEND_EMAIL_NOTIFICATION_OF_RECEIVED_EMAIL:
        'send email notification of received mail',
      POST_MAILS_MONTHLY: 'post mails monthly'
    };
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        contract_id: {
          type: 'integer'
        },
        service: {
          type: 'string',
          enum: [
            ContractsContacts.SERVICE_NAMES
              .SEND_EMAIL_NOTIFICATION_OF_RECEIVED_EMAIL,
            ContractsContacts.SERVICE_NAMES.POST_MAILS_MONTHLY
          ]
        }
      }
    };
  }

  static get relationMappings() {
    const Contracts = require('./Contracts');

    return {
      contract: {
        relation: Model.BelongsToOneRelation,
        modelClass: Contracts,
        join: {
          from: `${ContractsContacts.tableName}.contract_id`,
          to: `${Contracts.tableName}.id`
        }
      }
    };
  }
}

module.exports = ContractsServices;
