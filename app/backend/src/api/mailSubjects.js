module.exports = ({ Router, helpers, orchestrator }) => {
  const { ApiResultWrapper } = helpers;
  const router = Router();
  const apiResultWrapper = new ApiResultWrapper();

  router.get('/findAll', async (req, res) => {
    return apiResultWrapper.returnJSON({
      res,
      toReturn: await orchestrator.executeOld('mailSubjects', 'findAll')
    });
  });

  router.post('/create', async (req, res) => {
    return apiResultWrapper.returnJSON({
      res,
      toReturn: await orchestrator.executeOld(
        'mailSubjects',
        'create',
        req.body
      )
    });
  });

  return router;
};
