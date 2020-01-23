const { MailsPendingActions } = require('../../models');

exports.seed = async knex => {
  await knex(MailsPendingActions.tableName).insert([
    {
      id: 1,
      mail_id: 1,
      action: MailsPendingActions.ACTIONS.CONFIRM_SENDING_EMAIL_NOTIFICATION,
      reason: MailsPendingActions.REASONS.RECEIVED_NEW_MAIL,
      created_at: new Date('2019-11-11T11:11:11.000Z'),
      updated_at: new Date('2019-11-11T11:11:11.000Z')
    }
  ]);

  await knex.raw(
    `select setval('${MailsPendingActions.tableName}_id_seq', max(id)) from ${MailsPendingActions.tableName}`
  );
};
