const orchestrator = globalRequire('orchestrator');
const services = globalRequire('services');

module.exports = {
  start: async () => {
    await orchestrator.start({ services });
  },
  stop: async () => {
    await orchestrator.stop();
  }
};
