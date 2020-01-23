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
    const Contacts = require('./Contacts');
    const Emails = require('./Emails');
    const Invoices = require('./Invoices');
    const Phones = require('./Phones');
    const Services = require('./Services');

    return {
      contact_emails: {
        relation: Model.ManyToManyRelation,
        modelClass: Emails,
        join: {
          from: `${Contracts.tableName}.id`,
          through: {
            from: `${Contracts.tableName}_contact_${Emails.tableName}.contract_id`,
            to: `${Contracts.tableName}_contact_${Emails.tableName}.email_id`
          },
          to: `${Emails.tableName}.id`
        }
      },
      mail_notification_emails: {
        relation: Model.ManyToManyRelation,
        modelClass: Emails,
        join: {
          from: `${Contracts.tableName}.id`,
          through: {
            from: `${Contracts.tableName}_mail_notification_${Emails.tableName}.contract_id`,
            to: `${Contracts.tableName}_mail_notification_${Emails.tableName}.email_id`
          },
          to: `${Emails.tableName}.id`
        }
      },
      contact_phones: {
        relation: Model.ManyToManyRelation,
        modelClass: Phones,
        join: {
          from: `${Contracts.tableName}.id`,
          through: {
            from: `${Contracts.tableName}_contact_${Phones.tableName}.contract_id`,
            to: `${Contracts.tableName}_contact_${Phones.tableName}.phone_id`
          },
          to: `${Phones.tableName}.id`
        }
      },
      mail_receivers: {
        relation: Model.ManyToManyRelation,
        modelClass: Contacts,
        join: {
          from: `${Contracts.tableName}.id`,
          through: {
            from: `${Contracts.tableName}_mail_receivers.contract_id`,
            to: `${Contracts.tableName}_mail_receivers.mail_receiver_id`
          },
          to: `${Contacts.tableName}.id`
        }
      },
      document_keepers: {
        relation: Model.ManyToManyRelation,
        modelClass: Contacts,
        join: {
          from: `${Contracts.tableName}.id`,
          through: {
            from: `${Contracts.tableName}_document_keepers.contract_id`,
            to: `${Contracts.tableName}_document_keepers.document_keeper_id`
          },
          to: `${Contacts.tableName}.id`
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
      },
      services: {
        relation: Model.ManyToManyRelation,
        modelClass: Services,
        join: {
          from: `${Contracts.tableName}.id`,
          through: {
            from: `${Contracts.tableName}_${Services.tableName}.contract_id`,
            to: `${Contracts.tableName}_${Services.tableName}.service_id`
          },
          to: `${Services.tableName}.id`
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
