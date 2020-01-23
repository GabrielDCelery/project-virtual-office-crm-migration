const errors = require('./errors');
const service = require('./service');

module.exports = {
  ...errors,
  ...service
};
