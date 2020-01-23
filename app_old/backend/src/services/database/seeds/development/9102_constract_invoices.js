const { Contracts, Invoices } = require('../../models');

exports.seed = async knex => {
  await knex(`${Contracts.tableName}_${Invoices.tableName}`).insert([
    {
      contract_id: 1,
      invoice_id: 1
    },
    {
      contract_id: 2,
      invoice_id: 2
    }
  ]);
};
