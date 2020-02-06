const { Model } = require('objection');

class Documents extends Model {
  static get tableName() {
    return 'documents';
  }

  static get TYPES() {
    return {
      DEED_OF_ASSOCIATION: 'deed of association',
      IDENTITY_CARD: 'identity card',
      MAIL: 'mail',
      SPECIMEN_SIGNATURE: 'specimen signature'
    };
  }

  static get EXTENSIONS() {
    return {
      PDF: 'pdf'
    };
  }

  static get MIMETYPES() {
    return {
      APPLICATION_PDF: 'application/pdf'
    };
  }

  static get STORAGE_PROVIDERS() {
    return {
      DIGITALOCEAN: 'digitalocean'
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
        },
        extension: {
          type: 'string',
          enum: [Documents.EXTENSIONS.PDF]
        },
        mimetype: {
          type: 'string',
          enum: [Documents.MIMETYPES.APPLICATION_PDF]
        },
        size: {
          type: 'integer'
        },
        storage_provider: {
          type: 'string',
          enum: [Documents.STORAGE_PROVIDERS.DIGITALOCEAN]
        },
        storage_details: {
          type: 'json'
        }
      }
    };
  }

  static get relationMappings() {
    const Mails = require('./Mails');

    return {
      mail: {
        relation: Model.HasOneRelation,
        modelClass: Mails,
        join: {
          from: `${Documents.tableName}.id`,
          to: `${Mails.tableName}.document_id`
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
