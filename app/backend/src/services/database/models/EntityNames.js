const { Model } = require('objection');

class EntityNames extends Model {
  static get tableName() {
    return 'entity_names';
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
        }
      }
    };
  }
  static get relationMappings() {}
}

module.exports = EntityNames;
