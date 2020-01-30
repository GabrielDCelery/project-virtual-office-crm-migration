const RoutesGenerator = require('./RoutesGenerator');
const { STATUS_CODE_OK, STATUS_CODE_INTERNAL_SERVER_ERROR } = globalRequire(
  'common/constants'
);
const { ORCHESTRATOR_METHOD_GET_ALL_CITIES } = globalRequire('common/enums');

module.exports = class Cities extends RoutesGenerator {
  _createRouter({ router, orchestrator }) {
    router.get('/getAll', async (req, res) => {
      try {
        const addresses = await orchestrator
          .method(ORCHESTRATOR_METHOD_GET_ALL_CITIES)
          .execute();

        return res.status(STATUS_CODE_OK).json(addresses);
      } catch (error) {
        return res
          .status(STATUS_CODE_INTERNAL_SERVER_ERROR)
          .send(error.message);
      }
    });

    return router;
  }
};
