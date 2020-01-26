module.exports = ({ Router, helpers, orchestrator }) => {
  const { ApiResultWrapper } = helpers;
  const router = Router();
  const apiResultWrapper = new ApiResultWrapper();
  const COOKIE_SESSION_ID = 'PVOCRM_SESSION_ID';

  router.post('/login', async (req, res) => {
    const loginResult = await orchestrator.executeOld(
      'users',
      'login',
      req.body
    );

    if (!loginResult.success) {
      return apiResultWrapper.returnJSON({ res, toReturn: loginResult });
    }

    res.cookie(COOKIE_SESSION_ID, loginResult.payload.token, {
      httpOnly: true,
      secure: true
    });

    return apiResultWrapper.returnJSON({
      res,
      toReturn: loginResult,
      omit: ['token']
    });
  });

  router.post('/logout', async (req, res) => {
    res.clearCookie(COOKIE_SESSION_ID);

    return apiResultWrapper.returnJSON({
      res,
      toReturn: {
        success: true,
        errors: [],
        payload: null
      }
    });
  });

  router.post('/authenticateByCookie', async (req, res) => {
    const jwtToken = req.cookies[COOKIE_SESSION_ID];

    return apiResultWrapper.returnJSON({
      res,
      toReturn: await orchestrator.executeOld(
        'users',
        'authenticateByCookie',
        jwtToken
      )
    });
  });

  return router;
};
