const { Phones } = require('../../models');

exports.seed = async knex => {
  await knex(Phones.tableName).insert([
    {
      id: 1,
      number: '301111111',
      status: Phones.STATUSES.ACTIVE,
      type: Phones.TYPES.MOBILE,
      country_id: 98
    },
    {
      id: 2,
      number: '7513877154',
      status: Phones.STATUSES.INACTIVE,
      type: Phones.TYPES.MOBILE,
      country_id: 226
    }
  ]);

  await knex.raw(
    `select setval('${Phones.tableName}_id_seq', max(id)) from ${Phones.tableName}`
  );
};
