const services = globalRequire('services');
const helpers = globalRequire('helpers');
const jsonwebtoken = require('jsonwebtoken');
const lodash = require('lodash');
const AWS = require('aws-sdk');
const uuidv4 = require('uuid/v4');
const verror = require('verror');

const { EServiceName } = globalRequire('common/enums');
const {
  SERVICE_NAME_AUTHENTICATION,
  SERVICE_NAME_CLOUD,
  SERVICE_NAME_DATABASE,
  SERVICE_NAME_REDIS
} = EServiceName;

const {
  NODE_ENV,
  SERVICE_DB_CLIENT,
  SERVICE_DB_USER,
  SERVICE_DB_HOST,
  SERVICE_DB_PASSWORD,
  SERVICE_DB_DATABASE,
  SERVICE_DB_CHARSET,
  SERVICE_DB_PORT,
  SERVICE_REDIS_HOST,
  SERVICE_REDIS_PORT,
  SERVICE_JWT_SECRET,
  SERVICE_JWT_EXPIRY_IN_SECONDS,
  SERVICE_CLOUD_S3_ACCESS_KEY_ID,
  SERVICE_CLOUD_S3_SECRET_ACCESS_KEY,
  SERVICE_CLOUD_S3_ENDPOINT
} = process.env;

module.exports = {
  start: async () => {
    await services.get(SERVICE_NAME_DATABASE).start({
      environmentVariables: {
        NODE_ENV,
        SERVICE_DB_CLIENT,
        SERVICE_DB_USER,
        SERVICE_DB_HOST,
        SERVICE_DB_PASSWORD,
        SERVICE_DB_DATABASE,
        SERVICE_DB_CHARSET,
        SERVICE_DB_PORT
      },
      nodeModules: {
        lodash,
        uuidv4,
        verror
      },
      helpers: helpers
    });
    await services.get(SERVICE_NAME_REDIS).start({
      environmentVariables: {
        SERVICE_REDIS_HOST,
        SERVICE_REDIS_PORT
      },
      helpers: helpers
    });
    await services.get(SERVICE_NAME_AUTHENTICATION).start({
      environmentVariables: {
        SERVICE_JWT_SECRET,
        SERVICE_JWT_EXPIRY_IN_SECONDS
      },
      helpers: helpers,
      nodeModules: {
        jsonwebtoken,
        verror
      }
    });
    await services.get(SERVICE_NAME_CLOUD).start({
      environmentVariables: {
        SERVICE_CLOUD_S3_ACCESS_KEY_ID,
        SERVICE_CLOUD_S3_SECRET_ACCESS_KEY,
        SERVICE_CLOUD_S3_ENDPOINT
      },
      helpers: helpers,
      nodeModules: {
        AWS,
        verror
      }
    });

    return services;
  },
  stop: async () => {
    await services.get(SERVICE_NAME_DATABASE).stop();
    await services.get(SERVICE_NAME_AUTHENTICATION).stop();
    await services.get(SERVICE_NAME_REDIS).stop();
    await services.get(SERVICE_NAME_CLOUD).stop();
  }
};
