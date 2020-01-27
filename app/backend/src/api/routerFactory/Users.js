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
      const { loginResult } = await orchestrator
        .method(ORCHESTRATOR_METHOD_LOGIN_USER)
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
    });

    router.post('/logout', async (req, res) => {
      res.clearCookie(COOKIE_SESSION_ID);

      return resWrapper.returnJsonSuccess({ res });
    });

    router.post('/authenticateByCookie', async (req, res) => {
      const jwtToken = req.cookies[COOKIE_SESSION_ID];
      const authenticationResult = await orchestrator
        .method(ORCHESTRATOR_METHOD_AUTHENTICATE_USER_BY_COOKIE)
        .execute({ jwtToken });

      return resWrapper.returnOrchestratorResult({
        res,
        statusCodeSuccess: STATUS_CODE_OK,
        statusCodeFail: STATUS_CODE_UNAUTHORIZED,
        orchestratorResult: authenticationResult
      });
    });

    return router;
  }
};
