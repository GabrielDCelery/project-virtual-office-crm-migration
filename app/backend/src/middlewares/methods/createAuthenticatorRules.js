module.exports = ({ CSession, EOrchestratorMethod, config, orchestrator }) => {
  const { SESSION_COOKIE_ID } = CSession;
  const { ORCHESTRATOR_METHOD_VERIFY_USER_BY_JWT } = EOrchestratorMethod;

  return ({ rules }) => {
    return (req, res, next) => {
      (async () => {
        if (config.get('nodeEnv') === 'test') {
          return next();
        }

        try {
          const jwtToken = req.cookies[SESSION_COOKIE_ID];
          const { email, rules } = await orchestrator.execute({
            method: ORCHESTRATOR_METHOD_VERIFY_USER_BY_JWT,
            parameters: { jwtToken }
          });

          next();
        } catch (error) {
          next(error);
        }
      })();
    };
  };
};
