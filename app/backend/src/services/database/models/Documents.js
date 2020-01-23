const { Model } = require('objection');

class Documents extends Model {
  static get tableName() {
    return 'documents';
  }

  static get TYPES() {
    return {
      DEED_OF_ASSOCIATION: 'deed Of association',
      IDENTITY_CARD: 'identity card',
      MAIL: 'mail',
      SPECIMEN_SIGNATURE: 'specimen signature'
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
        name: {
          type: 'string'
        },
        type: {
          type: 'string',
          enum: [
            Documents.TYPES.DEED_OF_ASSOCIATION,
            Documents.TYPES.IDENTITY_CARD,
            Documents.TYPES.MAIL,
            Documents.TYPES.SPECIMEN_SIGNATURE
          ]
        }
      }
    };
  }

  static get relationMappings() {
    const Mails = require('./Mails');
    const DocumentsTemporary = require('./DocumentsTemporary');

    return {
      mail: {
        relation: Model.HasOneRelation,
        modelClass: Mails,
        join: {
          from: `${Documents.tableName}.id`,
          to: `${Mails.tableName}.document_id`
        }
      },
      temporary_saves: {
        relation: Model.HasManyRelation,
        modelClass: DocumentsTemporary,
        join: {
          from: `${Documents.tableName}.id`,
          to: `${DocumentsTemporary.tableName}.document_id`
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

module.exports = Documents;
