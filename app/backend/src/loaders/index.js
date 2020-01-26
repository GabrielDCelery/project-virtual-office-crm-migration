const apiLoader = require('./api');
const servicesLoader = require('./services');
const middlewaresLoader = require('./middlewares');
const orchestratorLoader = require('./orchestrator');
const cronjobsLoader = require('./cronjobs');

module.exports = {
  start: async () => {
    const services = await servicesLoader.start();
    const orchestrator = await orchestratorLoader.start({ services });
    const middlewares = await middlewaresLoader.start({ orchestrator });
    const app = await apiLoader.start({ middlewares, orchestrator });
    await cronjobsLoader.start();

    return { app };
  },
  stop: async () => {
    await cronjobsLoader.stop();
    await apiLoader.stop();
    await orchestratorLoader.stop();
    await servicesLoader.stop();
  }
};
