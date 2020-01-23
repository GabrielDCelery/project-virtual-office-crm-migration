const cronjobs = globalRequire('cronjobs');
const services = globalRequire('services');
const cron = require('cron');

module.exports = {
  start: async () => {
    await cronjobs.start({ services, nodeModules: { cron } });
  },
  stop: async () => {
    await cronjobs.stop();
  }
};
