module.exports = ({
  CStatusCode,
  EOrchestratorMethod,
  orchestrator,
  router
}) => {
  const { STATUS_CODE_OK, STATUS_CODE_INTERNAL_SERVER_ERROR } = CStatusCode;
  const {
    ORCHESTRATOR_METHOD_FILTER_ENTITY_NAMES,
    ORCHESTRATOR_METHOD_CREATE_ENTITY_NAME
  } = EOrchestratorMethod;

  router.post('/filter', async (req, res) => {
    try {
      const { filterTerm, limit } = req.body;
      const addresses = await orchestrator.execute({
        method: ORCHESTRATOR_METHOD_FILTER_ENTITY_NAMES,
        parameters: { filterTerm, limit }
      });

      return res.status(STATUS_CODE_OK).json(addresses);
    } catch (error) {
      return res.status(STATUS_CODE_INTERNAL_SERVER_ERROR).send(error.message);
    }
  });

  router.post('/create', async (req, res) => {
    try {
      const { name } = req.body;
      const addresses = await orchestrator.execute({
        method: ORCHESTRATOR_METHOD_CREATE_ENTITY_NAME,
        parameters: { name }
      });

      return res.status(STATUS_CODE_OK).json(addresses);
    } catch (error) {
      return res.status(STATUS_CODE_INTERNAL_SERVER_ERROR).send(error.message);
    }
  });

  return router;
};
