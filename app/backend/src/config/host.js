module.exports = ({ ENV_BACKEND_APP_PORT }) => {
  return {
    port: parseInt(ENV_BACKEND_APP_PORT, 10) || 8080
  };
};
