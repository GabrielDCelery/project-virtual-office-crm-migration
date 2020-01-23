const { Invoices } = require('../../models');

exports.seed = async knex => {
  await knex(Invoices.tableName).insert([
    {
      id: 1,
      number: 'EN06JHH',
      payment_amount: 19800,
      payment_method: 'cash',
      creation_date: new Date('2019-08-01T11:11:11'),
      transfer_date: new Date('2019-08-01T11:11:11'),
      created_at: new Date('2019-08-01T11:11:11'),
      updated_at: new Date('2019-08-01T11:11:11')
    },
    {
      id: 2,
      number: 'GH26HJ',
      payment_amount: 32940,
      payment_method: 'bank transfer',
      creation_date: new Date('2019-08-01T11:11:11'),
      transfer_date: new Date('2019-08-01T11:11:11'),
      created_at: new Date('2019-08-01T11:11:11'),
      updated_at: new Date('2019-08-01T11:11:11')
    }
  ]);

  await knex.raw(
    `select setval('${Invoices.tableName}_id_seq', max(id)) from ${Invoices.tableName}`
  );
};
