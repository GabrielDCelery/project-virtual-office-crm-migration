const apiLoader = require('./api');
const configLoader = require('./config');
const cronjobsLoader = require('./cronjobs');
const middlewaresLoader = require('./middlewares');
const orchestratorLoader = require('./orchestrator');
const servicesLoader = require('./services');

module.exports = {
  start: async () => {
    const config = await configLoader.start();
    const services = await servicesLoader.start({ config });
    const orchestrator = await orchestratorLoader.start({ services });
    const middlewares = await middlewaresLoader.start({ orchestrator });
    const app = await apiLoader.start({ config, middlewares, orchestrator });
    await cronjobsLoader.start();

    return { app, config };
  },
  stop: async () => {
    await cronjobsLoader.stop();
    await apiLoader.stop();
    await orchestratorLoader.stop();
    await servicesLoader.stop();
    await configLoader.stop();
  }
};
