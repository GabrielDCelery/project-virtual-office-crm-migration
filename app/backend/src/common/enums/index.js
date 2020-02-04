const EConfigAuthentication = require('./EConfigAuthentication');
const EOrchestratorMethod = require('./EOrchestratorMethod');
const ERoute = require('./ERoute');
const EServiceMethod = require('./EServiceMethod');
const EServiceName = require('./EServiceName');
const ERedisKeys = require('./ERedisKeys');

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
  EConfigAuthentication: createEnums(EConfigAuthentication),
  EOrchestratorMethod: createEnums(EOrchestratorMethod),
  ERoute: createEnums(ERoute),
  EServiceMethod: createEnums(EServiceMethod),
  EServiceName: createEnums(EServiceName),
  ERedisKeys: createEnums(ERedisKeys),
  ...createEnums(EConfigAuthentication),
  ...createEnums(EOrchestratorMethod),
  ...createEnums(ERoute),
  ...createEnums(EServiceMethod),
  ...createEnums(EServiceName),
  ...createEnums(ERedisKeys)
};
