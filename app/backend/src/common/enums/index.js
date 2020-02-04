const EConfigAuthentication = require('./EConfigAuthentication');
const EMiddlewareMethod = require('./EMiddlewareMethod');
const EOrchestratorMethod = require('./EOrchestratorMethod');
const ERedisKeys = require('./ERedisKeys');
const ERoute = require('./ERoute');
const EServiceMethod = require('./EServiceMethod');
const EServiceName = require('./EServiceName');

const createEnums = enums => {
  const enumsObj = {};

  enums.forEach((e /*, index*/) => {
    if (enumsObj[e]) {
      throw new Error(`Enum already declared ${e}`);
    }

    enumsObj[e] = e;
  });

  return enumsObj;
};

module.exports = {
  EServiceName: createEnums(EServiceName),
  EServiceMethod: createEnums(EServiceMethod),
  ERoute: createEnums(ERoute),
  ERedisKeys: createEnums(ERedisKeys),
  EOrchestratorMethod: createEnums(EOrchestratorMethod),
  EMiddlewareMethod: createEnums(EMiddlewareMethod),
  EConfigAuthentication: createEnums(EConfigAuthentication),
  ...createEnums(EServiceName),
  ...createEnums(EServiceMethod),
  ...createEnums(ERoute),
  ...createEnums(ERedisKeys),
  ...createEnums(EOrchestratorMethod),
  ...createEnums(EMiddlewareMethod),
  ...createEnums(EConfigAuthentication)
};
