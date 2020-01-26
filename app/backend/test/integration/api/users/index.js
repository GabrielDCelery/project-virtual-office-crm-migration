module.exports = () => {
  describe('/users', () => {
    require('./login')();
    require('./authenticateByCookie')();
  });
};
