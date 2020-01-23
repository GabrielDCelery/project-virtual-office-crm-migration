module.exports = services => {
  return async ({ name }) => {
    return await services
      .get('database')
      .execute('mailSenderNames', 'create', { name });
  };
};
