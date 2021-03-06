const middlewares = globalRequire('middlewares');
const utils = globalRequire('common/utils');
const { EOrchestratorMethod, EMiddlewareMethod } = globalRequire(
  'common/enums'
);
const { CSession } = globalRequire('common/constants');
const multer = require('multer');

module.exports = {
  start: async ({ config, orchestrator }) => {
    await middlewares.start({
      CSession,
      EMiddlewareMethod,
      EOrchestratorMethod,
      config,
      orchestrator,
      utils,
      nodeModules: { multer }
    });

    return middlewares;
  },
  stop: async () => {
    await middlewares.stop();
  }
};
