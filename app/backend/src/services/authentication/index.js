const JWT = require('./JWT');
const config = require('./config');
const {
  AUTHENTICATION_ERROR_MESSAGE_FAILED_TO_AUTHENTICATE,
  AUTHENTICATION_ERROR_NAME_CONTROLLER,
  AUTHENTICATION_SERVICE_NAME,
  JWT_ERROR_NAME_INVALID_TOKEN,
  JWT_ERROR_NAME_TOKEN_EXPIRED
} = require('./constants');
const { EServiceMethod } = globalRequire('common/enums');
const { SERVICE_METHOD_SIGN_JWT, SERVICE_METHOD_VERIFY_JWT } = EServiceMethod;

class MethodExecutor {
  constructor(method) {
    this.m = method;
    this.execute = this.execute.bind(this);
    this.result = this.result.bind(this);
  }

  async execute(argsObj) {
    this.calcResult = await this.m(argsObj);

    return this.calcResult;
  }

  result() {
    return this.calcResult;
  }
}

class Authentication {
  constructor() {
    this.helpers = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this._executeController = this._executeController.bind(this);
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

    this.methods = {
      [SERVICE_METHOD_SIGN_JWT]: async argsObj => {
        return await this._executeController('jwt', 'sign', argsObj);
      },
      [SERVICE_METHOD_VERIFY_JWT]: async argsObj => {
        return await this._executeController('jwt', 'verify', argsObj);
      }
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

  method(method) {
    return new MethodExecutor(this.methods[method]);
  }

  async _executeController(controller, method, args) {
    const { ServiceResultWrapper } = this.helpers;

    try {
      return await this.controllers[controller][method](args);
    } catch (error) {
      throw error;
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
