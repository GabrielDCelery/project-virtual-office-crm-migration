const S3 = require('./S3');
const config = require('./config');
const {
  CLOUD_SERVICE_NAME,
  CLOUD_ERROR_NAME_CONTROLLER
} = require('./constants');

class Cloud {
  constructor() {
    this.helpers = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.execute = this.execute.bind(this);
  }

  async initialize({ config, nodeModules }) {
    this.controllers = {
      s3: await new S3({
        config: config['s3'],
        constants: {},
        nodeModules
      }).initialize()
    };
  }

  async start({ environmentVariables, nodeModules, helpers }) {
    if (this.initialized) {
      throw new Error('Tried to initialize the redis connection twice!');
    }

    this.helpers = helpers;

    await this.initialize({
      config: config(environmentVariables),
      nodeModules
    });

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
        service: CLOUD_SERVICE_NAME,
        payload: result
      };

      return new ServiceResultWrapper().wrap(returnObj);
    } catch (error) {
      if (error.name !== CLOUD_ERROR_NAME_CONTROLLER) {
        throw error;
      }

      return new ServiceResultWrapper().wrap({
        type: ServiceResultWrapper.TYPE.FAIL,
        service: CLOUD_SERVICE_NAME,
        errors: [error]
      });
    }
  }
}

module.exports = new Cloud();
