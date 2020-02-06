const { ContractsServices } = require('../../models');

exports.seed = async knex => {
  await knex(ContractsServices.tableName).insert([
    {
      contract_id: 1,
      service: ContractsServices.SERVICE_NAMES.POST_MAILS_MONTHLY
    },
    {
      contract_id: 1,
      service:
        ContractsServices.SERVICE_NAMES
          .SEND_EMAIL_NOTIFICATION_OF_RECEIVED_EMAIL
    },
    {
      contract_id: 2,
      service:
        ContractsServices.SERVICE_NAMES
          .SEND_EMAIL_NOTIFICATION_OF_RECEIVED_EMAIL
    }
  ]);
};
