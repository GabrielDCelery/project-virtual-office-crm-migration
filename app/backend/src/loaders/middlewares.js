const middlewares = globalRequire('middlewares');
const multer = require('multer');

module.exports = {
  start: async ({ orchestrator }) => {
    await middlewares.get('multer').start({ nodeModules: { multer } });

    return middlewares;
  },
  stop: async () => {
    await middlewares.get('multer').stop();
  }
};
