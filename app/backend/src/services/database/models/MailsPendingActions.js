const { Model } = require('objection');

class MailsPendingActions extends Model {
  static get tableName() {
    return 'mails_pending_actions';
  }

  static get ACTIONS() {
    return {
      CONFIRM_SENDING_EMAIL_NOTIFICATION: 'confirm sending email notification',
      SEND_EMAIL_NOTIFICATION: 'send email notification '
    };
  }

  static get REASONS() {
    return {
      RECEIVED_NEW_MAIL: 'received new mail',
      REQUESTED_BY_USER: 'requested by user'
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
        mail_id: {
          type: 'integer'
        },
        action: {
          type: 'string',
          enum: [
            MailsPendingActions.ACTIONS.CONFIRM_SENDING_EMAIL_NOTIFICATION,
            MailsPendingActions.ACTIONS.SEND_EMAIL_NOTIFICATION
          ]
        },
        reason: {
          type: 'string',
          enum: [
            MailsPendingActions.REASONS.RECEIVED_NEW_MAIL,
            MailsPendingActions.REASONS.REQUESTED_BY_USER
          ]
        },
        pending: {
          type: 'boolean'
        }
      }
    };
  }

  static get relationMappings() {
    const Mails = require('./Mails');

    return {
      mail: {
        relation: Model.BelongsToOneRelation,
        modelClass: Mails,
        join: {
          from: `${MailsPendingActions.tableName}.mail_id`,
          to: `${Mails.tableName}.id`
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

module.exports = MailsPendingActions;
