module.exports = () => {
  describe('/api', () => {
    require('./health')();
    require('./addresses')();
    require('./users')();
  });
};
