module.exports = ({ Router, helpers, orchestrator }) => {
  const { ApiResultWrapper } = helpers;
  const router = Router();
  const apiResultWrapper = new ApiResultWrapper();

  router.get('/findAll', async (req, res) => {
    return apiResultWrapper.returnJSON({
      res,
      toReturn: await orchestrator.executeOld('mailSenderNames', 'findAll')
    });
  });

  router.post('/create', async (req, res) => {
    return apiResultWrapper.returnJSON({
      res,
      toReturn: await orchestrator.executeOld(
        'mailSenderNames',
        'create',
        req.body
      )
    });
  });

  return router;
};
