const RoutesGenerator = require('./RoutesGenerator');
const { CStatusCode } = globalRequire('common/constants');
const { EOrchestratorMethod } = globalRequire('common/enums');
const { STATUS_CODE_OK, STATUS_CODE_INTERNAL_SERVER_ERROR } = CStatusCode;
const { ORCHESTRATOR_METHOD_GET_ALL_ADDRESSES } = EOrchestratorMethod;

module.exports = class Addresses extends RoutesGenerator {
  _createRouter({ router, resWrapper, orchestrator }) {
    router.get('/getAll', async (req, res) => {
      const orchestratorResult = await orchestrator
        .method(ORCHESTRATOR_METHOD_GET_ALL_ADDRESSES)
        .execute();

      return resWrapper.returnOrchestratorResult({
        res,
        statusCodeSuccess: STATUS_CODE_OK,
        statusCodeFail: STATUS_CODE_INTERNAL_SERVER_ERROR,
        orchestratorResult
      });
    });

    return router;
  }
};
