module.exports = services => {
  return async ({ ids }) => {
    return await services
      .get('database')
      .execute(
        'mailsPendingActions',
        'sendEmailNotificationsForReceivedMails',
        { ids }
      );
  };
};
