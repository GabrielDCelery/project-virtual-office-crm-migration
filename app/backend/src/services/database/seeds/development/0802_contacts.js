const { Contacts } = require('../../models');

exports.seed = async knex => {
  await knex(Contacts.tableName).insert([
    {
      id: 1,
      address_id: 1,
      name_id: 1,
      is_mail_sender: true,
      is_mail_receiver: false,
      created_at: new Date('2019-11-11T11:11:11.000Z'),
      updated_at: new Date('2019-11-11T11:11:11.000Z')
    },
    {
      id: 2,
      address_id: 1,
      name_id: 2,
      is_mail_sender: true,
      is_mail_receiver: false,
      created_at: new Date('2019-11-11T11:11:11.000Z'),
      updated_at: new Date('2019-11-11T11:11:11.000Z')
    },
    {
      id: 3,
      address_id: 2,
      name_id: 4,
      is_mail_sender: true,
      is_mail_receiver: false,
      created_at: new Date('2019-11-11T11:11:11.000Z'),
      updated_at: new Date('2019-11-11T11:11:11.000Z')
    },
    {
      id: 4,
      address_id: 3,
      name_id: 9,
      is_mail_sender: true,
      is_mail_receiver: false,
      created_at: new Date('2019-11-11T11:11:11.000Z'),
      updated_at: new Date('2019-11-11T11:11:11.000Z')
    },
    {
      id: 5,
      address_id: 4,
      name_id: 4,
      is_mail_sender: true,
      is_mail_receiver: false,
      created_at: new Date('2019-11-11T11:11:11.000Z'),
      updated_at: new Date('2019-11-11T11:11:11.000Z')
    },
    {
      id: 6,
      address_id: 5,
      name_id: 11,
      is_mail_sender: false,
      is_mail_receiver: true,
      created_at: new Date('2019-11-11T11:11:11.000Z'),
      updated_at: new Date('2019-11-11T11:11:11.000Z')
    },
    {
      id: 7,
      address_id: 3,
      name_id: 12,
      is_mail_sender: false,
      is_mail_receiver: true,
      created_at: new Date('2019-11-11T11:11:11.000Z'),
      updated_at: new Date('2019-11-11T11:11:11.000Z')
    }
  ]);

  await knex.raw(
    `select setval('${Contacts.tableName}_id_seq', max(id)) from ${Contacts.tableName}`
  );
};
