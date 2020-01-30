module.exports = () => {
  describe('/addresses', () => {
    require('./getAll')();
    require('./filter')();
  });
};
