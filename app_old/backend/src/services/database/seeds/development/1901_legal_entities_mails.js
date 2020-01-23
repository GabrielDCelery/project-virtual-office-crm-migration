const { Mails } = require('../../models');

exports.seed = async knex => {
  await knex(Mails.tableName).insert([
    {
      id: 1,
      legal_entity_id: 1,
      sender_id: 4,
      subject_id: 2,
      document_id: 2
    }
  ]);

  await knex.raw(
    `select setval('${Mails.tableName}_id_seq', max(id)) from ${Mails.tableName}`
  );
};
