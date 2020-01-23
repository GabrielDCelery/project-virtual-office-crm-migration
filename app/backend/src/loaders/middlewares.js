const middlewares = globalRequire('middlewares');
const multer = require('multer');

module.exports = {
  start: async () => {
    await middlewares.get('multer').start({ nodeModules: { multer } });
  },
  stop: async () => {
    await middlewares.get('multer').stop();
  }
};
