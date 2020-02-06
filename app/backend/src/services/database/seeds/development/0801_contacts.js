const { Contacts } = require('../../models');

exports.seed = async knex => {
  const insertDate = new Date('2018-11-11T11:11:11');

  await knex(Contacts.tableName).insert([
    {
      id: 1,
      name_id: 1,
      phone_id: 1,
      email_id: 1,
      address_id: 1,
      created_at: insertDate,
      updated_at: insertDate
    }
  ]);

  await knex.raw(
    `select setval('${Contacts.tableName}_id_seq', max(id)) from ${Contacts.tableName}`
  );
};
