module.exports = ({
  CSession,
  CStatusCode,
  EOrchestratorMethod,
  logger,
  orchestrator,
  router
}) => {
  const { STATUS_CODE_OK, STATUS_CODE_UNAUTHORIZED } = CStatusCode;
  const {
    ORCHESTRATOR_METHOD_LOGIN_USER,
    ORCHESTRATOR_METHOD_VERIFY_USER_BY_JWT
  } = EOrchestratorMethod;
  const { SESSION_COOKIE_ID } = CSession;

  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const { rules, token } = await orchestrator.execute({
        method: ORCHESTRATOR_METHOD_LOGIN_USER,
        parameters: { email, password }
      });

      res
        .cookie(SESSION_COOKIE_ID, token, {
          httpOnly: true
          //secure: true
        })
        .status(STATUS_CODE_OK)
        .json({
          email,
          rules
        });
    } catch (error) {
      await logger.handleError({ error });
      return res.status(STATUS_CODE_UNAUTHORIZED).send(error.message);
    }
  });

  router.post('/logout', async (req, res) => {
    return res
      .clearCookie(SESSION_COOKIE_ID)
      .status(STATUS_CODE_OK)
      .send('OK');
  });

  router.post('/authenticateByCookie', async (req, res) => {
    try {
      const jwtToken = req.cookies[SESSION_COOKIE_ID];
      const { email, rules } = await orchestrator.execute({
        method: ORCHESTRATOR_METHOD_VERIFY_USER_BY_JWT,
        parameters: { jwtToken }
      });

      return res.status(STATUS_CODE_OK).json({
        email,
        rules
      });
    } catch (error) {
      await logger.handleError({ error });
      return res.status(STATUS_CODE_UNAUTHORIZED).send(error.message);
    }
  });

  return router;
};
