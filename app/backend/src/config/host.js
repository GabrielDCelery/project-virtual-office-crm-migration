module.exports = ({ BACKEND_APP_PORT }) => ({
  port: parseInt(BACKEND_APP_PORT, 10) || 8080
});
