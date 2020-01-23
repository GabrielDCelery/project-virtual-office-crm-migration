const JWT = require('./JWT');
const config = require('./config');
const {
  AUTHENTICATION_ERROR_MESSAGE_FAILED_TO_AUTHENTICATE,
  AUTHENTICATION_ERROR_NAME_CONTROLLER,
  AUTHENTICATION_SERVICE_NAME,
  JWT_ERROR_NAME_INVALID_TOKEN,
  JWT_ERROR_NAME_TOKEN_EXPIRED
} = require('./constants');

class Authentication {
  constructor() {
    this.helpers = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.execute = this.execute.bind(this);
  }

  initialize({ config, nodeModules }) {
    this.controllers = {
      jwt: new JWT({
        config: config['jwt'],
        constants: {
          AUTHENTICATION_ERROR_MESSAGE_FAILED_TO_AUTHENTICATE,
          AUTHENTICATION_ERROR_NAME_CONTROLLER,
          JWT_ERROR_NAME_INVALID_TOKEN,
          JWT_ERROR_NAME_TOKEN_EXPIRED
        },
        nodeModules
      })
    };
  }

  async start({ environmentVariables, nodeModules, helpers }) {
    if (this.initialized) {
      throw new Error('Tried to initialize the redis connection twice!');
    }

    this.helpers = helpers;
    this.initialize({ config: config(environmentVariables), nodeModules });
    this.initialized = true;
  }

  async stop() {
    this.initialized = false;
  }

  async execute(controller, method, args) {
    const { ServiceResultWrapper } = this.helpers;

    try {
      const result = await this.controllers[controller][method](args);

      const returnObj = {
        type: ServiceResultWrapper.TYPE.SUCCESS,
        service: AUTHENTICATION_SERVICE_NAME,
        payload: result
      };

      return new ServiceResultWrapper().wrap(returnObj);
    } catch (error) {
      if (error.name !== AUTHENTICATION_ERROR_NAME_CONTROLLER) {
        throw error;
      }

      return new ServiceResultWrapper().wrap({
        type: ServiceResultWrapper.TYPE.FAIL,
        service: AUTHENTICATION_SERVICE_NAME,
        errors: [error]
      });
    }
  }
}

module.exports = new Authentication();
