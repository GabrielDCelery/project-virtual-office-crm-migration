module.exports = ({
  CStatusCode,
  EOrchestratorMethod,
  logger,
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
      const records = await orchestrator.execute({
        method: ORCHESTRATOR_METHOD_GET_ALL_CITIES
      });

      return res.status(STATUS_CODE_OK).json(records);
    } catch (error) {
      await logger.handleError({ error });
      return res.status(STATUS_CODE_INTERNAL_SERVER_ERROR).send(error.message);
    }
  });

  router.post('/filter', async (req, res) => {
    try {
      const { filterTerm, limit } = req.body;
      const records = await orchestrator.execute({
        method: ORCHESTRATOR_METHOD_FILTER_CITIES,
        parameters: { filterTerm, limit }
      });

      return res.status(STATUS_CODE_OK).json(records);
    } catch (error) {
      await logger.handleError({ error });
      return res.status(STATUS_CODE_INTERNAL_SERVER_ERROR).send(error.message);
    }
  });

  return router;
};
