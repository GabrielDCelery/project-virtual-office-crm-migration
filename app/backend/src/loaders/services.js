const AWS = require('aws-sdk');
const Knex = require('knex');
const helpers = globalRequire('helpers');
const jsonwebtoken = require('jsonwebtoken');
const lodash = require('lodash');
const objection = require('objection');
const redis = require('redis');
const services = globalRequire('services');
const uuidv4 = require('uuid/v4');
const verror = require('verror');
const { CErrorController, CErrorMessage } = globalRequire('common/constants');
const { EServiceMethod } = globalRequire('common/enums');
const { MethodExecutor } = globalRequire('common/utils');
const { promisify } = require('util');

const {
  SERVICE_NAME_AUTHENTICATION,
  SERVICE_NAME_CLOUD,
  SERVICE_NAME_DATABASE,
  SERVICE_NAME_REDIS
} = globalRequire('common/enums');

module.exports = {
  start: async ({ config }) => {
    await services.get(SERVICE_NAME_DATABASE).start({
      EServiceMethod,
      config,
      nodeModules: {
        Knex,
        objection,
        lodash,
        uuidv4,
        verror
      },
      helpers: helpers,
      utils: {
        MethodExecutor
      }
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
