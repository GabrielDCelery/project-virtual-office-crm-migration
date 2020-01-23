const _ = require('lodash');

class ApiResultWrapper {
  constructor() {
    this.returnJSON = this.returnJSON.bind(this);
  }

  returnJSON({ res, toReturn, omit }) {
    const { success, service, errors, payload } = toReturn;

    return res.json({
      success,
      service,
      errors: errors.map(error => error.message),
      payload: Array.isArray(payload) ? payload : _.omit(payload, omit || [])
    });
  }
}

module.exports = ApiResultWrapper;
