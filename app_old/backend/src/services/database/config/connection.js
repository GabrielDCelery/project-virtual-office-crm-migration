const path = require('path');

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
    test: {
      client: SERVICE_DB_CLIENT,
      connection: {
        host: SERVICE_DB_HOST,
        user: SERVICE_DB_USER,
        password: SERVICE_DB_PASSWORD,
        database: SERVICE_DB_DATABASE,
        charset: SERVICE_DB_CHARSET,
        port: SERVICE_DB_PORT
      },
      migrations: {
        directory: path.join(__dirname, '../migrations/development')
      },
      seeds: {
        directory: path.join(__dirname, '../seeds/development')
      }
    },
    development: {
      client: SERVICE_DB_CLIENT,
      connection: {
        host: SERVICE_DB_HOST,
        user: SERVICE_DB_USER,
        password: SERVICE_DB_PASSWORD,
        database: SERVICE_DB_DATABASE,
        charset: SERVICE_DB_CHARSET,
        port: SERVICE_DB_PORT
      },
      migrations: {
        directory: path.join(__dirname, '../migrations/development')
      },
      seeds: {
        directory: path.join(__dirname, '../seeds/development')
      }
    },
    staging: {
      client: SERVICE_DB_CLIENT,
      connection: {
        database: SERVICE_DB_DATABASE,
        user: SERVICE_DB_USER,
        password: SERVICE_DB_PASSWORD
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
    production: {
      client: SERVICE_DB_CLIENT,
      connection: {
        host: SERVICE_DB_HOST,
        user: SERVICE_DB_USER,
        password: SERVICE_DB_PASSWORD,
        database: SERVICE_DB_DATABASE,
        charset: SERVICE_DB_CHARSET,
        port: SERVICE_DB_PORT
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: path.join(__dirname, '../migrations/production')
      }
    }
  };
};
