const { ContractsContacts } = require('../../models');

exports.seed = async knex => {
  await knex(ContractsContacts.tableName).insert([
    {
      contract_id: 1,
      contact_id: 1,
      activity: ContractsContacts.ACTIVITIES.CONTACT_EMAIL
    },
    {
      contract_id: 2,
      contact_id: 1,
      activity: ContractsContacts.ACTIVITIES.MAIL_NOTIFICATION_EMAIL
    }
  ]);
};
