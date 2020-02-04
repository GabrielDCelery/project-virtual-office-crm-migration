module.exports = ({
  CStatusCode,
  EMiddlewareMethod,
  EOrchestratorMethod,
  logger,
  middlewares,
  orchestrator,
  router
}) => {
  const { STATUS_CODE_OK, STATUS_CODE_INTERNAL_SERVER_ERROR } = CStatusCode;
  const {
    ORCHESTRATOR_METHOD_GET_ALL_ADDRESSES,
    ORCHESTRATOR_METHOD_FILTER_ADDRESSES,
    ORCHESTRATOR_METHOD_CREATE_ADDRESS
  } = EOrchestratorMethod;
  const {
    MIDDLEWARE_METHOD_CREATE_AUTHENTICATION_RBAC_RULES
  } = EMiddlewareMethod;

  router.get(
    '/getAll',
    middlewares.execute({
      method: MIDDLEWARE_METHOD_CREATE_AUTHENTICATION_RBAC_RULES,
      parameters: {
        rules: ['RBAC_RULE_READ_ADDRESSES']
      }
    }),
    async (req, res) => {
      try {
        const addresses = await orchestrator.execute({
          method: ORCHESTRATOR_METHOD_GET_ALL_ADDRESSES
        });

        return res.status(STATUS_CODE_OK).json(addresses);
      } catch (error) {
        await logger.handleError({ error });
        return res
          .status(STATUS_CODE_INTERNAL_SERVER_ERROR)
          .send(error.message);
      }
    }
  );

  router.post(
    '/filter',
    middlewares.execute({
      method: MIDDLEWARE_METHOD_CREATE_AUTHENTICATION_RBAC_RULES,
      parameters: {
        rules: ['RBAC_RULE_READ_ADDRESSES']
      }
    }),
    async (req, res) => {
      try {
        const { filterTerm, limit } = req.body;
        const addresses = await orchestrator.execute({
          method: ORCHESTRATOR_METHOD_FILTER_ADDRESSES,
          parameters: { filterTerm, limit }
        });

        return res.status(STATUS_CODE_OK).json(addresses);
      } catch (error) {
        await logger.handleError({ error });
        return res
          .status(STATUS_CODE_INTERNAL_SERVER_ERROR)
          .send(error.message);
      }
    }
  );

  router.post(
    '/create',
    middlewares.execute({
      method: MIDDLEWARE_METHOD_CREATE_AUTHENTICATION_RBAC_RULES,
      parameters: {
        rules: ['RBAC_RULE_WRITE_ADDRESSES']
      }
    }),
    async (req, res) => {
      try {
        const { postcode, city, street } = req.body;
        const addresses = await orchestrator.execute({
          method: ORCHESTRATOR_METHOD_CREATE_ADDRESS,
          parameters: { postcode, city, street }
        });

        return res.status(STATUS_CODE_OK).json(addresses);
      } catch (error) {
        await logger.handleError({ error });
        return res
          .status(STATUS_CODE_INTERNAL_SERVER_ERROR)
          .send(error.message);
      }
    }
  );

  return router;
};
