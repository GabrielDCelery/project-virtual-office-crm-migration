const { Contracts } = require('../../models');

exports.seed = async knex => {
  await knex(`${Contracts.tableName}_document_keepers`).insert([
    {
      contract_id: 1,
      name_id: 7,
      address_id: 3
    },
    {
      contract_id: 2,
      name_id: 6,
      address_id: 2
    }
  ]);
};
