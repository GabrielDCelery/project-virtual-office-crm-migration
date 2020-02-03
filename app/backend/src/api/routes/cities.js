module.exports = ({
  CStatusCode,
  EOrchestratorMethod,
  orchestrator,
  router
}) => {
  const { STATUS_CODE_OK, STATUS_CODE_INTERNAL_SERVER_ERROR } = CStatusCode;
  const {
    ORCHESTRATOR_METHOD_GET_ALL_CITIES,
    ORCHESTRATOR_METHOD_FILTER_CITIES
  } = EOrchestratorMethod;

  router.get('/getAll', async (req, res) => {
    try {
      const addresses = await orchestrator.execute({
        method: ORCHESTRATOR_METHOD_GET_ALL_CITIES
      });

      return res.status(STATUS_CODE_OK).json(addresses);
    } catch (error) {
      return res.status(STATUS_CODE_INTERNAL_SERVER_ERROR).send(error.message);
    }
  });

  router.post('/filter', async (req, res) => {
    try {
      const { filterTerm, limit } = req.body;
      const addresses = await orchestrator.execute({
        method: ORCHESTRATOR_METHOD_FILTER_CITIES,
        parameters: { filterTerm, limit }
      });

      return res.status(STATUS_CODE_OK).json(addresses);
    } catch (error) {
      return res.status(STATUS_CODE_INTERNAL_SERVER_ERROR).send(error.message);
    }
  });

  return router;
};