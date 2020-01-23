const { Countries } = require('../../models');

exports.seed = async knex => {
  await knex(Countries.tableName).insert(require('../data/address_countries'));

  await knex.raw(
    `select setval('${Countries.tableName}_id_seq', max(id)) from ${Countries.tableName}`
  );
};
