const { Addresses } = require('../../models');

exports.seed = async knex => {
  const insertDate = new Date('2018-11-11T11:11:11');

  await knex(Addresses.tableName).insert([
    {
      id: 1,
      postcode: '1033',
      city_id: 310,
      long_street: 'Miklós u. 13. VIII/42.',
      created_at: insertDate,
      updated_at: insertDate
    },
    {
      id: 2,
      postcode: '1033',
      city_id: 310,
      long_street: 'Kiscelli utca 45.',
      created_at: insertDate,
      updated_at: insertDate
    },
    {
      id: 3,
      postcode: '8000',
      city_id: 2528,
      long_street: 'Melencei u. 35-37.',
      created_at: insertDate,
      updated_at: insertDate
    },
    {
      id: 4,
      postcode: '3527',
      city_id: 1668,
      long_street: 'József Attila u. 56.',
      created_at: insertDate,
      updated_at: insertDate
    },
    {
      id: 5,
      postcode: '1054',
      city_id: 310,
      long_street: 'Báthory utca 6-4. 3. emelet 12.',
      created_at: insertDate,
      updated_at: insertDate
    }
  ]);

  await knex.raw(
    `select setval('${Addresses.tableName}_id_seq', max(id)) from ${Addresses.tableName}`
  );
};
