const middlewares = globalRequire('middlewares');
const utils = globalRequire('common/utils');
const { EMiddlewareMethod } = globalRequire('common/enums');
const multer = require('multer');

module.exports = {
  start: async ({ orchestrator }) => {
    await middlewares.start({
      EMiddlewareMethod,
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
