const { Contracts } = require('../../models');

exports.seed = async knex => {
  await knex(`${Contracts.tableName}_document_keepers`).insert([
    {
      contract_id: 1,
      document_keeper_id: 7
    },
    {
      contract_id: 2,
      document_keeper_id: 6
    }
  ]);
};
