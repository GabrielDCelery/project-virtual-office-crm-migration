const services = globalRequire('services');
const helpers = globalRequire('helpers');
const jsonwebtoken = require('jsonwebtoken');
const lodash = require('lodash');
const redis = require('redis');
const { promisify } = require('util');
const AWS = require('aws-sdk');
const uuidv4 = require('uuid/v4');
const verror = require('verror');
const { MethodExecutor } = globalRequire('common/utils');
const { EServiceMethod } = globalRequire('common/enums');
const { CErrorController, CErrorMessage } = globalRequire('common/constants');

const {
  SERVICE_NAME_AUTHENTICATION,
  SERVICE_NAME_CLOUD,
  SERVICE_NAME_DATABASE,
  SERVICE_NAME_REDIS
} = globalRequire('common/enums');

const {
  NODE_ENV,
  ENV_SERVICE_DB_CLIENT,
  ENV_SERVICE_DB_USER,
  ENV_SERVICE_DB_HOST,
  ENV_SERVICE_DB_PASSWORD,
  ENV_SERVICE_DB_DATABASE,
  ENV_SERVICE_DB_CHARSET,
  ENV_SERVICE_DB_PORT,
  ENV_SERVICE_CLOUD_S3_ACCESS_KEY_ID,
  ENV_SERVICE_CLOUD_S3_SECRET_ACCESS_KEY,
  ENV_SERVICE_CLOUD_S3_ENDPOINT
} = process.env;

module.exports = {
  start: async ({ config }) => {
    await services.get(SERVICE_NAME_DATABASE).start({
      environmentVariables: {
        NODE_ENV,
        ENV_SERVICE_DB_CLIENT,
        ENV_SERVICE_DB_USER,
        ENV_SERVICE_DB_HOST,
        ENV_SERVICE_DB_PASSWORD,
        ENV_SERVICE_DB_DATABASE,
        ENV_SERVICE_DB_CHARSET,
        ENV_SERVICE_DB_PORT
      },
      nodeModules: {
        lodash,
        uuidv4,
        verror
      },
      helpers: helpers
    });
    await services.get(SERVICE_NAME_REDIS).start({
      EServiceMethod,
      config,
      nodeModules: {
        redis,
        promisify
      },
      utils: {
        MethodExecutor
      }
    });
    await services.get(SERVICE_NAME_AUTHENTICATION).start({
      CErrorController,
      CErrorMessage,
      EServiceMethod,
      config,
      nodeModules: {
        jsonwebtoken,
        verror
      },
      utils: {
        MethodExecutor
      }
    });
    /*
    await services.get(SERVICE_NAME_CLOUD).start({
      environmentVariables: {
        ENV_SERVICE_CLOUD_S3_ACCESS_KEY_ID,
        ENV_SERVICE_CLOUD_S3_SECRET_ACCESS_KEY,
        ENV_SERVICE_CLOUD_S3_ENDPOINT
      },
      helpers: helpers,
      nodeModules: {
        AWS,
        verror
      }
    });
    */

    return services;
  },
  stop: async () => {
    await services.get(SERVICE_NAME_DATABASE).stop();
    await services.get(SERVICE_NAME_AUTHENTICATION).stop();
    await services.get(SERVICE_NAME_REDIS).stop();
    //await services.get(SERVICE_NAME_CLOUD).stop();
  }
};
