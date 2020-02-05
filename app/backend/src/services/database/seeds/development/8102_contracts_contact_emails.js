const { Contracts } = require('../../models');
const { Emails } = require('../../models');

exports.seed = async knex => {
  await knex(`${Contracts.tableName}_contact_${Emails.tableName}`).insert([
    {
      contract_id: 1,
      name_id: 1,
      email_id: 1
    }
  ]);
};
