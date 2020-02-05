const { Contracts } = require('../../models');
const { Phones } = require('../../models');

exports.seed = async knex => {
  await knex(`${Contracts.tableName}_contact_${Phones.tableName}`).insert([
    {
      contract_id: 1,
      name_id: 1,
      phone_id: 1
    }
  ]);
};
