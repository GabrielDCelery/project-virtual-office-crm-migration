const { Cities } = require('../../models');

exports.seed = async knex => {
  await knex(Cities.tableName).insert(require('../data/address_cities'));

  await knex.raw(
    `select setval('${Cities.tableName}_id_seq', max(id)) from ${Cities.tableName}`
  );
};
