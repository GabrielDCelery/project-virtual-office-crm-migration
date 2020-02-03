const _ = require('lodash');
const api = require('./api');
const authentication = require('./authentication');
const host = require('./host');
const redis = require('./redis');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const {
  NODE_ENV,
  ENV_BACKEND_APP_PORT,
  ENV_SERVICE_JWT_SECRET,
  ENV_SERVICE_JWT_EXPIRY_IN_SECONDS
} = process.env;

let singleton = null;

class Config {
  constructor() {
    this.nodeEnv = NODE_ENV;
    this.host = host({
      ENV_BACKEND_APP_PORT
    });
    this.api = api({});
    this.authentication = authentication({
      ENV_SERVICE_JWT_SECRET,
      ENV_SERVICE_JWT_EXPIRY_IN_SECONDS
    });
  }

  static createSingleton() {
    if (!singleton) {
      singleton = new Config();
    }

    return singleton;
  }

  init(processEnv) {
    const {
      NODE_ENV,
      ENV_SERVICE_REDIS_PORT,
      ENV_SERVICE_REDIS_HOST,
      ENV_SERVICE_JWT_SECRET,
      ENV_SERVICE_JWT_EXPIRY_IN_SECONDS,
      ENV_BACKEND_APP_PORT
    } = processEnv;

    this.nodeEnv = NODE_ENV;

    this.host = host({
      ENV_BACKEND_APP_PORT
    });

    this.api = api({});

    this.authentication = authentication({
      ENV_SERVICE_JWT_SECRET,
      ENV_SERVICE_JWT_EXPIRY_IN_SECONDS
    });

    this.redis = redis({
      ENV_SERVICE_REDIS_HOST,
      ENV_SERVICE_REDIS_PORT
    });

    return this;
  }

  get(path) {
    const conf = _.get(this, path);

    if (conf === undefined) {
      throw new Error(`Invalid path for configuration ${path}`);
    }

    return conf;
  }
}

module.exports = Config;
