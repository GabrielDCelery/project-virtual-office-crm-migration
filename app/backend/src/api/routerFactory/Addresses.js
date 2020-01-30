const RoutesGenerator = require('./RoutesGenerator');
const { STATUS_CODE_OK, STATUS_CODE_INTERNAL_SERVER_ERROR } = globalRequire(
  'common/constants'
);
const {
  ORCHESTRATOR_METHOD_GET_ALL_ADDRESSES,
  ORCHESTRATOR_METHOD_FILTER_ADDRESSES
} = globalRequire('common/enums');

module.exports = class Addresses extends RoutesGenerator {
  _createRouter({ router, orchestrator }) {
    router.get('/getAll', async (req, res) => {
      try {
        const addresses = await orchestrator.execute({
          method: ORCHESTRATOR_METHOD_GET_ALL_ADDRESSES
        });

        return res.status(STATUS_CODE_OK).json(addresses);
      } catch (error) {
        return res
          .status(STATUS_CODE_INTERNAL_SERVER_ERROR)
          .send(error.message);
      }
    });

    router.post('/filter', async (req, res) => {
      try {
        const { filterTerm, limit } = req.body;
        const addresses = await orchestrator.execute({
          method: ORCHESTRATOR_METHOD_FILTER_ADDRESSES,
          parameters: { filterTerm, limit }
        });

        return res.status(STATUS_CODE_OK).json(addresses);
      } catch (error) {
        console.log(error);
        return res
          .status(STATUS_CODE_INTERNAL_SERVER_ERROR)
          .send(error.message);
      }
    });

    return router;
  }
};
