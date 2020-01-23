const { Model } = require('objection');

class MailSubjects extends Model {
  static get tableName() {
    return 'mail_subjects';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: {
          type: 'integer'
        },
        long_subject: {
          type: 'string'
        }
      }
    };
  }

  static get relationMappings() {
    const Mails = require('./Mails');

    return {
      mails: {
        relation: Model.HasManyRelation,
        modelClass: Mails,
        join: {
          from: `${MailSubjects.tableName}.id`,
          to: `${Mails.tableName}.subject_id`
        }
      }
    };
  }
}

module.exports = MailSubjects;
