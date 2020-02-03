const EConfigAuthentication = require('./EConfigAuthentication');
const EOrchestratorMethod = require('./EOrchestratorMethod');
const ERouter = require('./ERouter');
const EServiceMethod = require('./EServiceMethod');
const EServiceName = require('./EServiceName');
const ERedisKeys = require('./ERedisKeys');

const createEnums = enums => {
  const enumsObj = {};

  enums.forEach((e, index) => {
    if (enumsObj[e]) {
      throw new Error(`Enum already declared ${e}`);
    }

    enumsObj[e] = index;
  });

  return enumsObj;
};

module.exports = {
  EConfigAuthentication: createEnums(EConfigAuthentication),
  EOrchestratorMethod: createEnums(EOrchestratorMethod),
  ERouter: createEnums(ERouter),
  EServiceMethod: createEnums(EServiceMethod),
  EServiceName: createEnums(EServiceName),
  ERedisKeys: createEnums(ERedisKeys),
  ...createEnums(EConfigAuthentication),
  ...createEnums(EOrchestratorMethod),
  ...createEnums(ERouter),
  ...createEnums(EServiceMethod),
  ...createEnums(EServiceName),
  ...createEnums(ERedisKeys)
};
