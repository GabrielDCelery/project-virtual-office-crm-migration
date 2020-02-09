module.exports = () => {
  describe('/api', () => {
    require('./health')();
    require('./addresses')();
    require('./legalEntities')();
    require('./naturalPeople')();
    require('./users')();
  });
};
