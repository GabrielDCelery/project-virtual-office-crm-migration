module.exports = () => {
  describe('/api', () => {
    require('./health')();
    require('./addresses')();
    require('./naturalPeople')();
    require('./users')();
  });
};
