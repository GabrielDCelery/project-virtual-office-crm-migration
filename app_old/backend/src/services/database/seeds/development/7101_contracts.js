const { Contracts } = require('../../models');

exports.seed = async knex => {
  await knex(Contracts.tableName).insert([
    {
      id: 1,
      client_id: 1,
      client_signatory_id: 1,
      client_signatory_type: Contracts.SIGNATORY_TYPES.MANAGER,
      service_provider_id: 3,
      service_provider_signatory_id: 3,
      service_provider_signatory_type: Contracts.SIGNATORY_TYPES.MANAGER,
      start_at: new Date('2019-08-01T11:11:11'),
      end_at: new Date('2020-02-01T11:11:11'),
      status: Contracts.STATUSES.ACTIVE,
      created_at: new Date('2019-08-01T11:11:11'),
      updated_at: new Date('2019-08-01T11:11:11')
    },
    {
      id: 2,
      client_id: 2,
      client_signatory_id: 2,
      client_signatory_type: Contracts.SIGNATORY_TYPES.MANAGER,
      service_provider_id: 3,
      service_provider_signatory_id: 3,
      service_provider_signatory_type: Contracts.SIGNATORY_TYPES.MANAGER,
      start_at: new Date('2019-08-01T11:11:11'),
      end_at: new Date('2020-02-01T11:11:11'),
      status: Contracts.STATUSES.ACTIVE,
      created_at: new Date('2019-08-01T11:11:11'),
      updated_at: new Date('2019-08-01T11:11:11')
    }
  ]);

  await knex.raw(
    `select setval('${Contracts.tableName}_id_seq', max(id)) from ${Contracts.tableName}`
  );
};
