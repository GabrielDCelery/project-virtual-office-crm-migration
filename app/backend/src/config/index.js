const _ = require('lodash');
const host = require('./host');
const authentication = require('./authentication');
const api = require('./api');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const {
  NODE_ENV,
  BACKEND_APP_PORT,
  USER_JWT_SECRET,
  USER_JWT_EXPIRY
} = process.env;

class Config {
  constructor() {
    this.nodeEnv = NODE_ENV;
    this.host = host({
      BACKEND_APP_PORT
    });
    this.api = api({});
    this.authentication = authentication({
      USER_JWT_SECRET,
      USER_JWT_EXPIRY
    });
  }

  get(path) {
    const conf = _.get(this, path);

    if (_.isNil(conf)) {
      throw new Error(`Invalid path for configuration ${path}`);
    }

    return conf;
  }
}

module.exports = new Config();
