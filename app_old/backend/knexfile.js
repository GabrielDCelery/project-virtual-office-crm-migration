const config = require('./src/services/database/config');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const {
  NODE_ENV,
  BACKEND_APP_PORT,
  SERVICE_DB_CLIENT,
  SERVICE_DB_USER,
  SERVICE_DB_HOST,
  SERVICE_DB_PASSWORD,
  SERVICE_DB_DATABASE,
  SERVICE_DB_CHARSET,
  SERVICE_DB_PORT
} = process.env;

module.exports = config({
  NODE_ENV,
  BACKEND_APP_PORT,
  SERVICE_DB_CLIENT,
  SERVICE_DB_USER,
  SERVICE_DB_HOST,
  SERVICE_DB_PASSWORD,
  SERVICE_DB_DATABASE,
  SERVICE_DB_CHARSET,
  SERVICE_DB_PORT
})['connection'];
