module.exports = ({ Router, helpers, orchestrator }) => {
  const { ApiResultWrapper } = helpers;
  const router = Router();
  const apiResultWrapper = new ApiResultWrapper();

  router.get('/findAllPendingEmailNotifications', async (req, res) => {
    return apiResultWrapper.returnJSON({
      res,
      toReturn: await orchestrator.executeOld(
        'mailsPendingActions',
        'findAllPendingEmailNotifications'
      )
    });
  });

  router.post('/sendEmailNotificationsForReceivedMails', async (req, res) => {
    return apiResultWrapper.returnJSON({
      res,
      toReturn: await orchestrator.executeOld(
        'mailsPendingActions',
        'sendEmailNotificationsForReceivedMails',
        req.body
      )
    });
  });

  return router;
};
