module.exports = () => {
  describe('INTEGRATION TESTS', () => {
    require('./api')();
    require('./services')();
  });
};
