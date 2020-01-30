const _ = require('lodash');

class MethodExecutor {
  constructor() {
    this.methods = {};
    this.execute = this.execute.bind(this);
    this.register = this.register.bind(this);
  }

  register({ path, method }) {
    if (_.get(this.methods, path) !== undefined) {
      throw new Error(`Method path already taken ${path}`);
    }

    _.set(this.methods, path, method);

    return this;
  }

  execute({ method, parameters }) {
    return _.get(this.methods, method)(parameters || {});
  }
}

module.exports = MethodExecutor;
