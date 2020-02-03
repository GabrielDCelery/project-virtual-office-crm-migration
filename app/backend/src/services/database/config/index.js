const connection = require('./connection');

module.exports = ({
  ENV_SERVICE_DB_CLIENT,
  ENV_SERVICE_DB_USER,
  ENV_SERVICE_DB_HOST,
  ENV_SERVICE_DB_PASSWORD,
  ENV_SERVICE_DB_DATABASE,
  ENV_SERVICE_DB_CHARSET,
  ENV_SERVICE_DB_PORT
}) => {
  return {
    connection: connection({
      ENV_SERVICE_DB_CLIENT,
      ENV_SERVICE_DB_USER,
      ENV_SERVICE_DB_HOST,
      ENV_SERVICE_DB_PASSWORD,
      ENV_SERVICE_DB_DATABASE,
      ENV_SERVICE_DB_CHARSET,
      ENV_SERVICE_DB_PORT
    })
  };
};
