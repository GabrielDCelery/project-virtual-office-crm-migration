const path = require('path');

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
    test: {
      client: ENV_SERVICE_DB_CLIENT,
      connection: {
        host: ENV_SERVICE_DB_HOST,
        user: ENV_SERVICE_DB_USER,
        password: ENV_SERVICE_DB_PASSWORD,
        database: ENV_SERVICE_DB_DATABASE,
        charset: ENV_SERVICE_DB_CHARSET,
        port: ENV_SERVICE_DB_PORT
      },
      migrations: {
        directory: path.join(
          __dirname,
          '../services/database/migrations/development'
        )
      },
      seeds: {
        directory: path.join(
          __dirname,
          '../services/database/seeds/development'
        )
      }
    },
    development: {
      client: ENV_SERVICE_DB_CLIENT,
      connection: {
        host: ENV_SERVICE_DB_HOST,
        user: ENV_SERVICE_DB_USER,
        password: ENV_SERVICE_DB_PASSWORD,
        database: ENV_SERVICE_DB_DATABASE,
        charset: ENV_SERVICE_DB_CHARSET,
        port: ENV_SERVICE_DB_PORT
      },
      migrations: {
        directory: path.join(
          __dirname,
          '../services/database/migrations/development'
        )
      },
      seeds: {
        directory: path.join(
          __dirname,
          '../services/database/seeds/development'
        )
      }
    },
    staging: {
      client: ENV_SERVICE_DB_CLIENT,
      connection: {
        database: ENV_SERVICE_DB_DATABASE,
        user: ENV_SERVICE_DB_USER,
        password: ENV_SERVICE_DB_PASSWORD
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
      client: ENV_SERVICE_DB_CLIENT,
      connection: {
        host: ENV_SERVICE_DB_HOST,
        user: ENV_SERVICE_DB_USER,
        password: ENV_SERVICE_DB_PASSWORD,
        database: ENV_SERVICE_DB_DATABASE,
        charset: ENV_SERVICE_DB_CHARSET,
        port: ENV_SERVICE_DB_PORT
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: path.join(
          __dirname,
          '../services/database/migrations/production'
        )
      }
    }
  };
};
