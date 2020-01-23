const { Model } = require('objection');

class HistoryManyToManyChanges extends Model {
  static get tableName() {
    return 'history_many_to_many_changes';
  }

  static get TABLES() {
    return {
      CONTRACTS: 'contracts',
      EMAILS: 'emails'
    };
  }

  static get ACTIONS() {
    return {
      ADDED: 'added',
      REMOVED: 'removed'
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
        table_one: {
          type: 'string',
          enum: [HistoryRecordChanges.TABLES.CONTRACTS]
        },
        table_one_column: {
          type: 'integer'
        },
        table_two: {
          type: 'string',
          enum: [HistoryRecordChanges.TABLES.EMAILS]
        },
        table_two_column: {
          type: 'integer'
        },
        actions: {
          type: 'string',
          enum: [
            HistoryRecordChanges.ACTIONS.ADDED,
            HistoryRecordChanges.ACTIONS.REMOVED
          ]
        }
      }
    };
  }

  $beforeInsert() {
    this.changed_at = new Date().toISOString();
  }
}

module.exports = HistoryManyToManyChanges;
