module.exports = ({ Router, helpers, orchestrator }) => {
  const { ApiResultWrapper } = helpers;
  const router = Router();
  const apiResultWrapper = new ApiResultWrapper();

  router.get('/getAllVersionsOfAllRecords', async (req, res) => {
    return apiResultWrapper.returnJSON({
      res,
      toReturn: await orchestrator.execute(
        'legalEntities',
        'getAllVersionsOfAllRecords'
      )
    });
  });
  router.get('/getAllVersionsOfSingleRecord', async (req, res) => {
    return apiResultWrapper.returnJSON({
      res,
      toReturn: await orchestrator.execute(
        'legalEntities',
        'getAllVersionsOfSingleRecord',
        req.body
      )
    });
  });

  router.get('/getLatestVersionsOfAllRecords', async (req, res) => {
    return apiResultWrapper.returnJSON({
      res,
      toReturn: await orchestrator.execute(
        'legalEntities',
        'getLatestVersionsOfAllRecords'
      )
    });
  });

  router.get('/getTypes', async (req, res) => {
    return apiResultWrapper.returnJSON({
      res,
      toReturn: await orchestrator.execute('legalEntities', 'getTypes')
    });
  });

  router.post('/update', async (req, res) => {
    return apiResultWrapper.returnJSON({
      res,
      toReturn: await orchestrator.execute('legalEntities', 'update', req.body)
    });
  });

  return router;
};
