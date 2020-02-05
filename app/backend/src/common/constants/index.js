const CErrorController = require('./CErrorController');
const CErrorMessage = require('./CErrorMessage');
const CErrorName = require('./CErrorName');
const CStatusCode = require('./CStatusCode');
const CSession = require('./CSession');

module.exports = {
  CErrorController,
  CErrorMessage,
  CErrorName,
  CStatusCode,
  CSession,
  ...CErrorController,
  ...CErrorMessage,
  ...CErrorName,
  ...CStatusCode,
  ...CSession
};
