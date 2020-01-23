const { MailsAuditTrails } = require('../../models');

exports.seed = async knex => {
  await knex(MailsAuditTrails.tableName).insert([
    {
      id: 1,
      mail_id: 1,
      event_type: MailsAuditTrails.TYPES.RECEIVED,
      created_at: new Date('2019-11-11T11:11:11.000Z'),
      updated_at: new Date('2019-11-11T11:11:11.000Z')
    }
  ]);

  await knex.raw(
    `select setval('${MailsAuditTrails.tableName}_id_seq', max(id)) from ${MailsAuditTrails.tableName}`
  );
};
