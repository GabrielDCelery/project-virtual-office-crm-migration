const orchestrator = globalRequire('orchestrator');

module.exports = {
  start: async ({ services }) => {
    await orchestrator.start({ services });

    return orchestrator;
  },
  stop: async () => {
    await orchestrator.stop();
  }
};
