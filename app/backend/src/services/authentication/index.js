const { MethodExecutor } = globalRequire('common/utils');
const { SERVICE_METHOD_SIGN_JWT, SERVICE_METHOD_VERIFY_JWT } = globalRequire(
  'common/enums'
);
const JWT = require('./JWT');

class Authentication {
  constructor() {
    this.methodExecutor = new MethodExecutor();
    this._wrapController = this._wrapController.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  _wrapController(controller, method) {
    return async parameters => {
      return await this.controllers[controller][method](parameters);
    };
  }

  initialize({ config, nodeModules }) {
    this.controllers = {
      jwt: new JWT({ config: config['jwt'], nodeModules })
    };

    this.methodExecutor
      .register({
        path: SERVICE_METHOD_SIGN_JWT,
        method: this._wrapController('jwt', 'sign')
      })
      .register({
        path: SERVICE_METHOD_VERIFY_JWT,
        method: this._wrapController('jwt', 'verify')
      });
  }

  async start({ config, nodeModules }) {
    if (this.initialized) {
      throw new Error('Tried to initialize the redis connection twice!');
    }

    this.initialize({ config, nodeModules });
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
