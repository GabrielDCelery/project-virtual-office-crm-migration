const { Contracts, Services } = require('../../models');

exports.seed = async knex => {
  await knex(`${Contracts.tableName}_${Services.tableName}`).insert([
    {
      contract_id: 1,
      service_id: 1
    },
    {
      contract_id: 1,
      service_id: 2
    },
    {
      contract_id: 2,
      service_id: 1
    }
  ]);
};
