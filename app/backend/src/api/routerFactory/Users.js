const RoutesGenerator = require('./RoutesGenerator');
const { CStatusCode } = globalRequire('common/constants');
const { EOrchestratorMethod } = globalRequire('common/enums');
const {
  ORCHESTRATOR_METHOD_LOGIN_USER,
  ORCHESTRATOR_METHOD_AUTHENTICATE_USER_BY_COOKIE
} = EOrchestratorMethod;
const { STATUS_CODE_OK, STATUS_CODE_UNAUTHORIZED } = CStatusCode;

module.exports = class Users extends RoutesGenerator {
  _createRouter({ router, resWrapper, orchestrator }) {
    const COOKIE_SESSION_ID = 'PVOCRM_SESSION_ID';

    router.post('/login', async (req, res) => {
      try {
        const { email, password } = req.body;
        const { rules, token } = await orchestrator
          .method(ORCHESTRATOR_METHOD_LOGIN_USER)
          .execute({ email, password });

        return res
          .cookie(COOKIE_SESSION_ID, token, {
            httpOnly: true,
            secure: true
          })
          .status(STATUS_CODE_OK)
          .json({
            email,
            rules
          });
      } catch (error) {
        return res.status(STATUS_CODE_UNAUTHORIZED).send(error.message);
      }
      /*
      const loginResult = await orchestrator
        .get(ORCHESTRATOR_METHOD_LOGIN_USER)
        .execute(req.body);

      if (!loginResult.success) {
        return resWrapper.returnOrchestratorResult({
          res,
          statusCodeFail: STATUS_CODE_UNAUTHORIZED,
          orchestratorResult: loginResult
        });
      }

      res.cookie(COOKIE_SESSION_ID, loginResult.payload.token, {
        httpOnly: true,
        secure: true
      });

      return resWrapper.returnOrchestratorResult({
        res,
        statusCodeSuccess: STATUS_CODE_OK,
        orchestratorResult: loginResult,
        omit: ['token']
      });
      */
    });

    router.post('/logout', async (req, res) => {
      return res
        .clearCookie(COOKIE_SESSION_ID)
        .status(STATUS_CODE_OK)
        .send('OK');
    });

    router.post('/authenticateByCookie', async (req, res) => {
      try {
        const jwtToken = req.cookies[COOKIE_SESSION_ID];
        const { email, rules } = await orchestrator
          .method(ORCHESTRATOR_METHOD_AUTHENTICATE_USER_BY_COOKIE)
          .execute({ jwtToken });

        return res.status(STATUS_CODE_OK).json({
          email,
          rules
        });
      } catch (error) {
        return res.status(STATUS_CODE_UNAUTHORIZED).send(error.message);
      }
      /*
      const jwtToken = req.cookies[COOKIE_SESSION_ID];
      const authenticationResult = await orchestrator
        .get(ORCHESTRATOR_METHOD_AUTHENTICATE_USER_BY_COOKIE)
        .execute({ jwtToken });

      return resWrapper.returnOrchestratorResult({
        res,
        statusCodeSuccess: STATUS_CODE_OK,
        statusCodeFail: STATUS_CODE_UNAUTHORIZED,
        orchestratorResult: authenticationResult
      });
      */
    });

    return router;
  }
};
