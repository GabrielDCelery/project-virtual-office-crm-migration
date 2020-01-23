module.exports = services => {
  return async args => {
    return await services
      .get('database')
      .execute('legalEntities', 'update', args);
  };
};
