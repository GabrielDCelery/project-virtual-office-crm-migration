const { Emails } = require('../../models');

exports.seed = async knex => {
  await knex(Emails.tableName).insert([
    {
      id: 1,
      address: 'foo@gmail.com',
      status: Emails.STATUSES.ACTIVE
    },
    {
      id: 2,
      address: 'bar@gmail.com',
      status: Emails.STATUSES.INACTIVE
    }
  ]);

  await knex.raw(
    `select setval('${Emails.tableName}_id_seq', max(id)) from ${Emails.tableName}`
  );
};
