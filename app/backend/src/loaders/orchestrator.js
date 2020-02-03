const orchestrator = globalRequire('orchestrator');
const { Filterer, MethodExecutor } = globalRequire('common/utils');
const {
  EOrchestratorMethod,
  EServiceMethod,
  EServiceName,
  ERedisKeys
} = globalRequire('common/enums');

module.exports = {
  start: async ({ services }) => {
    await orchestrator.start({
      EOrchestratorMethod,
      EServiceMethod,
      EServiceName,
      ERedisKeys,
      services,
      utils: { Filterer, MethodExecutor }
    });

    return orchestrator;
  },
  stop: async () => {
    await orchestrator.stop();
  }
};
