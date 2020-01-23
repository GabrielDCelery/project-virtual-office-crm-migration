const { Model } = require('objection');

class DocumentsCloud extends Model {
  static get tableName() {
    return 'documents_cloud';
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

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: {
          type: 'uuid'
        },
        document_id: {
          type: 'integer'
        },
        storage_details: {
          type: 'json'
        },
        mimetype: {
          type: 'string',
          enum: [DocumentsCloud.MIMETYPES.APPLICATION_PDF]
        },
        extension: {
          type: 'string',
          enum: [DocumentsCloud.EXTENSIONS.PDF]
        },
        size: {
          type: 'integer'
        },
        created_at: {
          type: 'string',
          format: 'date-time'
        },
        updated_at: {
          type: 'string',
          format: 'date-time'
        }
      }
    };
  }

  static get relationMappings() {
    const Documents = require('./Documents');

    return {
      document: {
        relation: Model.BelongsToOneRelation,
        modelClass: Documents,
        join: {
          from: `${DocumentsCloud.tableName}.document_id`,
          to: `${Documents.tableName}.id`
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

module.exports = DocumentsCloud;
