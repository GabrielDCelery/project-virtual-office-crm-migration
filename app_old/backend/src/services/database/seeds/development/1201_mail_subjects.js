const { MailSubjects } = require('../../models');

exports.seed = async knex => {
  await knex(MailSubjects.tableName).insert([
    {
      id: 1,
      long_subject: 'Bírósági Végzés'
    },
    {
      id: 2,
      long_subject: 'Felhívás'
    }
  ]);

  await knex.raw(
    `select setval('${MailSubjects.tableName}_id_seq', max(id)) from ${MailSubjects.tableName}`
  );
};
