const { Model } = require('objection');

class HistoryRecordChanges extends Model {
  static get tableName() {
    return 'history_record_changes';
  }

  static get TABLES() {
    return {
      LEGAL_ENTITIES: 'legal_entities',
      NATURAL_PEOPLE: 'natural_people'
    };
  }

  static get COLUMNS() {
    return {
      SHORT_NAME: 'short_name',
      LONG_NAME: 'long_name',
      TYPE: 'type',
      REGISTRATION_ID: 'registration_id',
      TAX_ID: 'tax_id',
      PERMANENT_ADDRESS_ID: 'permanent_address_id',
      FIRST_NAME: 'first_name',
      LAST_NAME: 'last_name',
      MOTHER_NAME: 'mother_name',
      BIRTH_DATE: 'birth_date',
      IDENTIFIER_DOCUMENT_ID: 'identifier_document_id'
    };
  }

  static get COLUMN_TYPES() {
    return {
      STRING: 'string',
      INTEGER: 'integer'
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
        table: {
          type: 'string',
          enum: [
            HistoryRecordChanges.TABLES.LEGAL_ENTITIES,
            HistoryRecordChanges.TABLES.NATURAL_PEOPLE
          ]
        },
        column: {
          type: 'string',
          enum: [
            HistoryRecordChanges.COLUMNS.SHORT_NAME,
            HistoryRecordChanges.COLUMNS.LONG_NAME,
            HistoryRecordChanges.COLUMNS.TYPE,
            HistoryRecordChanges.COLUMNS.REGISTRATION_ID,
            HistoryRecordChanges.COLUMNS.TAX_ID,
            HistoryRecordChanges.COLUMNS.PERMANENT_ADDRESS_ID,
            HistoryRecordChanges.COLUMNS.FIRST_NAME,
            HistoryRecordChanges.COLUMNS.LAST_NAME,
            HistoryRecordChanges.COLUMNS.MOTHER_NAME,
            HistoryRecordChanges.COLUMNS.BIRTH_DATE,
            HistoryRecordChanges.COLUMNS.IDENTIFIER_DOCUMENT_ID
          ]
        },
        column_type: {
          type: 'string',
          enum: [
            HistoryRecordChanges.COLUMN_TYPES.STRING,
            HistoryRecordChanges.COLUMN_TYPES.INTEGER
          ]
        },
        record_id: {
          type: 'integer'
        },
        old_value: {
          type: 'string'
        },
        new_value: {
          type: 'string'
        }
      }
    };
  }

  $beforeInsert() {
    this.changed_at = new Date().toISOString();
  }
}

module.exports = HistoryRecordChanges;
