module.exports = ({
  CStatusCode,
  EOrchestratorMethod,
  logger,
  orchestrator,
  router
}) => {
  const { STATUS_CODE_OK, STATUS_CODE_INTERNAL_SERVER_ERROR } = CStatusCode;
  const {
    ORCHESTRATOR_METHOD_FILTER_NATURAL_PEOPLE,
    ORCHESTRATOR_METHOD_CREATE_NATURAL_PERSON
  } = EOrchestratorMethod;

  router.post('/filter', async (req, res) => {
    try {
      const { filterTerm, limit } = req.body;
      const addresses = await orchestrator.execute({
        method: ORCHESTRATOR_METHOD_FILTER_NATURAL_PEOPLE,
        parameters: { filterTerm, limit }
      });

      return res.status(STATUS_CODE_OK).json(addresses);
    } catch (error) {
      await logger.handleError({ error });
      return res.status(STATUS_CODE_INTERNAL_SERVER_ERROR).send(error.message);
    }
  });

  router.post('/create', async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        motherName,
        birthDate,
        identifierDocumentType,
        identifierDocumentNumber,
        permanentAddressId
      } = req.body;
      const addresses = await orchestrator.execute({
        method: ORCHESTRATOR_METHOD_CREATE_NATURAL_PERSON,
        parameters: {
          firstName,
          lastName,
          motherName,
          birthDate,
          identifierDocumentType,
          identifierDocumentNumber,
          permanentAddressId
        }
      });

      return res.status(STATUS_CODE_OK).json(addresses);
    } catch (error) {
      await logger.handleError({ error });
      return res.status(STATUS_CODE_INTERNAL_SERVER_ERROR).send(error.message);
    }
  });

  return router;
};
