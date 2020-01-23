const connection = require('./connection');

module.exports = ({
  SERVICE_DB_CLIENT,
  SERVICE_DB_USER,
  SERVICE_DB_HOST,
  SERVICE_DB_PASSWORD,
  SERVICE_DB_DATABASE,
  SERVICE_DB_CHARSET,
  SERVICE_DB_PORT
}) => {
  return {
    connection: connection({
      SERVICE_DB_CLIENT,
      SERVICE_DB_USER,
      SERVICE_DB_HOST,
      SERVICE_DB_PASSWORD,
      SERVICE_DB_DATABASE,
      SERVICE_DB_CHARSET,
      SERVICE_DB_PORT
    })
  };
};
