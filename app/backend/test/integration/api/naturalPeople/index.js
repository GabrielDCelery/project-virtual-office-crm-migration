module.exports = () => {
  describe('/naturalPeople', () => {
    require('./create')();
    require('./filter')();
  });
};
