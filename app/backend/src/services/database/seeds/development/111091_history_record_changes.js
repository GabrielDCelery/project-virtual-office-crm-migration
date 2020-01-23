const { HistoryRecordChanges } = require('../../models');

exports.seed = async knex => {
  await knex(HistoryRecordChanges.tableName).insert([
    {
      id: 1,
      table: 'legal_entities',
      column: 'short_name',
      column_type: 'string',
      record_id: 2,
      old_value: 'Chrono-Trigger',
      new_value: 'Chrono-Line',
      changed_at: new Date('2018-09-02T11:11:11')
    },
    {
      id: 2,
      table: 'legal_entities',
      column: 'long_name',
      column_type: 'string',
      record_id: 2,
      old_value: 'Chrono-Trigger',
      new_value: 'Chrono-Line',
      changed_at: new Date('2018-09-02T11:11:11')
    },
    {
      id: 3,
      table: 'legal_entities',
      column: 'tax_id',
      column_type: 'string',
      record_id: 2,
      old_value: '41580371-1-42',
      new_value: '31580371-1-42',
      changed_at: new Date('2019-08-09T11:11:11')
    },
    {
      id: 4,
      table: 'natural_people',
      column: 'permanent_address_id',
      column_type: 'integer',
      record_id: 2,
      old_value: '4',
      new_value: '3',
      changed_at: new Date('2019-08-01T11:11:11')
    }
  ]);

  await knex.raw(
    `select setval('${HistoryRecordChanges.tableName}_id_seq', max(id)) from ${HistoryRecordChanges.tableName}`
  );
};
