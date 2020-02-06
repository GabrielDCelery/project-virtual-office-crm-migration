module.exports = () => {
  describe('database', () => {
    require('./SERVICE_METHOD_CREATE_NATURAL_PERSON')();
    require('./SERVICE_METHOD_GET_ALL_ENTITY_NAMES')();
    require('./SERVICE_METHOD_GET_ALL_NATURAL_PEOPLE_FOR_QUICK_SEARCH')();
  });
};
