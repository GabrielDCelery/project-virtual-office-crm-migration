module.exports = ({ ENV_SERVICE_REDIS_HOST, ENV_SERVICE_REDIS_PORT }) => {
  return {
    host: ENV_SERVICE_REDIS_HOST,
    port: ENV_SERVICE_REDIS_PORT
  };
};
