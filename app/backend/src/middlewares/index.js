const methods = require('./methods');

class Middlewares {
  constructor() {
    this.initialized = false;
    this.methodExecutor = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.execute = this.execute.bind(this);
  }

  async start({ EMiddlewareMethod, orchestrator, utils, nodeModules }) {
    if (this.initialized) {
      throw new Error('Tried to initialize middlewares twice!');
    }

    const {
      MIDDLEWARE_METHOD_CREATE_AUTHENTICATION_RBAC_RULES
    } = EMiddlewareMethod;

    this.methodExecutor = utils.MethodExecutor.createInstance().register({
      path: MIDDLEWARE_METHOD_CREATE_AUTHENTICATION_RBAC_RULES,
      method: methods.createAuthenticatorRules({ orchestrator })
    });

    this.initialized = true;

    return this;
  }

  async stop() {
    this.initialized = false;
  }

  execute({ method, parameters }) {
    return this.methodExecutor.execute({
      method,
      parameters
    });
  }
}

module.exports = new Middlewares();
