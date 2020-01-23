const { Services } = require('../../models');

exports.seed = async knex => {
  await knex(Services.tableName).insert([
    {
      id: 1,
      name: 'send email notification of received mail'
    },
    {
      id: 2,
      name: 'post mails monthly'
    }
  ]);

  await knex.raw(
    `select setval('${Services.tableName}_id_seq', max(id)) from ${Services.tableName}`
  );
};
