module.exports = ({ SERVICE_REDIS_HOST, SERVICE_REDIS_PORT }) => {
  return {
    host: SERVICE_REDIS_HOST,
    port: SERVICE_REDIS_PORT
  };
};
