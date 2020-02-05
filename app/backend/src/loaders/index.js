const apiLoader = require('./api');
const configLoader = require('./config');
const cronjobsLoader = require('./cronjobs');
const loggerLoader = require('./logger');
const middlewaresLoader = require('./middlewares');
const orchestratorLoader = require('./orchestrator');
const servicesLoader = require('./services');

module.exports = {
  start: async () => {
    const config = await configLoader.start();
    const logger = await loggerLoader.start({ config });
    const services = await servicesLoader.start({ config });
    const orchestrator = await orchestratorLoader.start({ services });
    const middlewares = await middlewaresLoader.start({ config, orchestrator });
    const app = await apiLoader.start({
      config,
      logger,
      middlewares,
      orchestrator
    });
    await cronjobsLoader.start();

    return { app, config };
  },
  stop: async () => {
    await cronjobsLoader.stop();
    await apiLoader.stop();
    await orchestratorLoader.stop();
    await servicesLoader.stop();
    await loggerLoader.stop();
    await configLoader.stop();
  }
};
