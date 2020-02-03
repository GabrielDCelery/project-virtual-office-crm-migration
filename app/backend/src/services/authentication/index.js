const JWT = require('./JWT');

class Authentication {
  constructor() {
    this.methodExecutor = null;
    this._wrapController = this._wrapController.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  _wrapController(controller, method) {
    return async parameters => {
      return await this.controllers[controller][method](parameters);
    };
  }

  async start({
    CErrorController,
    CErrorMessage,
    EServiceMethod,
    config,
    nodeModules,
    utils
  }) {
    if (this.initialized) {
      throw new Error('Tried to initialize the redis connection twice!');
    }

    const {
      SERVICE_METHOD_SIGN_JWT,
      SERVICE_METHOD_VERIFY_JWT
    } = EServiceMethod;

    this.controllers = {
      jwt: new JWT({ CErrorController, CErrorMessage, config, nodeModules })
    };

    this.methodExecutor = utils.MethodExecutor.createInstance()
      .register({
        path: SERVICE_METHOD_SIGN_JWT,
        method: this._wrapController('jwt', 'sign')
      })
      .register({
        path: SERVICE_METHOD_VERIFY_JWT,
        method: this._wrapController('jwt', 'verify')
      });

    this.initialized = true;
  }

  async stop() {
    this.initialized = false;
  }

  async execute({ method, parameters }) {
    return await this.methodExecutor.execute({
      method,
      parameters
    });
  }
}

module.exports = new Authentication();
