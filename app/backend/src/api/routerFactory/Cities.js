const RoutesGenerator = require('./RoutesGenerator');
const { CStatusCode } = globalRequire('common/constants');
const { EOrchestratorMethod } = globalRequire('common/enums');
const { STATUS_CODE_OK, STATUS_CODE_INTERNAL_SERVER_ERROR } = CStatusCode;
const { ORCHESTRATOR_METHOD_GET_ALL_CITIES } = EOrchestratorMethod;

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
