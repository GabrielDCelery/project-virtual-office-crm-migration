const logger = globalRequire('logger');

module.exports = {
  start: async ({ config }) => {
    await logger.start({ config });

    return logger;
  },
  stop: async () => {
    await logger.stop();
  }
};
