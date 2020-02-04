const Config = globalRequire('config');

module.exports = {
  start: async () => {
    const {
      ENV_BACKEND_APP_PORT,
      ENV_SERVICE_DB_CHARSET,
      ENV_SERVICE_DB_CLIENT,
      ENV_SERVICE_DB_DATABASE,
      ENV_SERVICE_DB_HOST,
      ENV_SERVICE_DB_PASSWORD,
      ENV_SERVICE_DB_PORT,
      ENV_SERVICE_DB_USER,
      ENV_SERVICE_JWT_EXPIRY_IN_SECONDS,
      ENV_SERVICE_JWT_SECRET,
      ENV_SERVICE_REDIS_HOST,
      ENV_SERVICE_REDIS_PORT,
      NODE_ENV
    } = process.env;

    return Config.createSingleton().init({
      ENV_BACKEND_APP_PORT,
      ENV_SERVICE_DB_CHARSET,
      ENV_SERVICE_DB_CLIENT,
      ENV_SERVICE_DB_DATABASE,
      ENV_SERVICE_DB_HOST,
      ENV_SERVICE_DB_PASSWORD,
      ENV_SERVICE_DB_PORT,
      ENV_SERVICE_DB_USER,
      ENV_SERVICE_JWT_EXPIRY_IN_SECONDS,
      ENV_SERVICE_JWT_SECRET,
      ENV_SERVICE_REDIS_HOST,
      ENV_SERVICE_REDIS_PORT,
      NODE_ENV
    });
  },
  stop: async () => {}
};
