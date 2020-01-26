module.exports = ({ BACKEND_APP_PORT }) => {
  return {
    port: parseInt(BACKEND_APP_PORT, 10) || 8080
  };
};
