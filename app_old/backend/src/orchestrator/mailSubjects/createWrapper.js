module.exports = services => {
  return async ({ longSubject }) => {
    return await services
      .get('database')
      .execute('mailSubjects', 'create', { longSubject });
  };
};
