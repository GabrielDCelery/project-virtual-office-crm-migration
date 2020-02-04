module.exports = ({ orchestrator }) => {
  return ({ rules }) => {
    return (req, res, next) => {
      (async () => {
        try {
          console.log(req.cookies);
          const jwtToken = req.cookies['PVOCRM_SESSION_ID'];
          const { email, rules } = await orchestrator.execute({
            method: 'ORCHESTRATOR_METHOD_AUTHENTICATE_USER_BY_COOKIE',
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
