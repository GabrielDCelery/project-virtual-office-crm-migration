const Config = globalRequire('config');

module.exports = {
  start: async () => {
    const {
      ENV_BACKEND_APP_PORT,
      ENV_SERVICE_JWT_EXPIRY_IN_SECONDS,
      ENV_SERVICE_JWT_SECRET,
      ENV_SERVICE_REDIS_HOST,
      ENV_SERVICE_REDIS_PORT,
      NODE_ENV
    } = process.env;

    return Config.createSingleton().init({
      ENV_BACKEND_APP_PORT,
      ENV_SERVICE_JWT_EXPIRY_IN_SECONDS,
      ENV_SERVICE_JWT_SECRET,
      ENV_SERVICE_REDIS_HOST,
      ENV_SERVICE_REDIS_PORT,
      NODE_ENV
    });
  },
  stop: async () => {}
};
