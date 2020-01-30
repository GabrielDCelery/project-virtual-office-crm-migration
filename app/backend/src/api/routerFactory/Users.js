const RoutesGenerator = require('./RoutesGenerator');
const { STATUS_CODE_OK, STATUS_CODE_UNAUTHORIZED } = globalRequire(
  'common/constants'
);
const {
  ORCHESTRATOR_METHOD_LOGIN_USER,
  ORCHESTRATOR_METHOD_AUTHENTICATE_USER_BY_COOKIE
} = globalRequire('common/enums');

module.exports = class Users extends RoutesGenerator {
  _createRouter({ router, orchestrator }) {
    const COOKIE_SESSION_ID = 'PVOCRM_SESSION_ID';

    router.post('/login', async (req, res) => {
      try {
        const { email, password } = req.body;
        const { rules, token } = await orchestrator.execute({
          method: ORCHESTRATOR_METHOD_LOGIN_USER,
          parameters: { email, password }
        });

        res
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
        console.log(error);
        return res.status(STATUS_CODE_UNAUTHORIZED).send(error.message);
      }
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
        const { email, rules } = await orchestrator.execute({
          method: ORCHESTRATOR_METHOD_AUTHENTICATE_USER_BY_COOKIE,
          parameters: { jwtToken }
        });

        return res.status(STATUS_CODE_OK).json({
          email,
          rules
        });
      } catch (error) {
        return res.status(STATUS_CODE_UNAUTHORIZED).send(error.message);
      }
    });

    return router;
  }
};
