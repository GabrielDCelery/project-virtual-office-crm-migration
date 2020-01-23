const api = require('./api');
const services = require('./services');
const middlewares = require('./middlewares');
const orchestrator = require('./orchestrator');
const cronjobs = require('./cronjobs');

module.exports = {
  start: async ({ app, Router }) => {
    await services.start();
    await middlewares.start();
    await orchestrator.start();
    await api.start({
      Router,
      app,
      middlewares: globalRequire('middlewares'),
      orchestrator: globalRequire('orchestrator')
    });
    await cronjobs.start();
  },
  stop: async () => {
    await cronjobs.stop();
    await api.stop();
    await orchestrator.stop();
    await services.stop();
  }
};
