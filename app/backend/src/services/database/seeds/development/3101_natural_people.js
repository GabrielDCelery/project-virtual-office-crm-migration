const { NaturalPeople } = require('../../models');

exports.seed = async knex => {
  await knex(NaturalPeople.tableName).insert([
    {
      id: 1,
      first_name: 'Gabriel',
      last_name: 'Celery',
      mother_name: 'Ildiko Zeller',
      birth_date: new Date('1983-11-08'),
      identifier_document_id: 1,
      permanent_address_id: 1,
      created_at: new Date('2019-08-01T11:11:11'),
      updated_at: new Date('2019-08-01T11:11:11')
    },
    {
      id: 2,
      first_name: 'Thomas',
      last_name: 'Jefferson',
      mother_name: 'Jane Randolph Jefferson',
      birth_date: new Date('1743-04-13'),
      identifier_document_id: 1,
      permanent_address_id: 3,
      created_at: new Date('2018-06-03T11:11:11'),
      updated_at: new Date('2019-08-01T11:11:11')
    },
    {
      id: 3,
      first_name: 'Ildikó',
      last_name: 'Zeller',
      mother_name: 'Viszlovszki Ildikó',
      birth_date: new Date('1956-10-20'),
      identifier_document_id: 1,
      permanent_address_id: 3,
      created_at: new Date('2017-06-03T11:11:11'),
      updated_at: new Date('2017-06-03T11:11:11')
    }
  ]);

  await knex.raw(
    `select setval('${NaturalPeople.tableName}_id_seq', max(id)) from ${NaturalPeople.tableName}`
  );
};
