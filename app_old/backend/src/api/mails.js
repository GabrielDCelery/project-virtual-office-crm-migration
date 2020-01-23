module.exports = ({ Router, helpers, middlewares, orchestrator }) => {
  const { ApiResultWrapper } = helpers;
  const router = Router();
  const apiResultWrapper = new ApiResultWrapper();

  router.post(
    '/create',
    middlewares.get('multer').createSync('single', 'file'),
    async (req, res) => {
      const { body, file } = req;

      return apiResultWrapper.returnJSON({
        res,
        toReturn: await orchestrator.execute('mails', 'create', {
          ...body,
          file
        })
      });
    }
  );

  return router;
};
