const CErrorController = require('./CErrorController');
const CErrorMessage = require('./CErrorMessage');
const CErrorName = require('./CErrorName');
const CStatusCode = require('./CStatusCode');

module.exports = {
  CErrorController,
  CErrorMessage,
  CErrorName,
  CStatusCode,
  ...CErrorController,
  ...CErrorMessage,
  ...CErrorName,
  ...CStatusCode
};
