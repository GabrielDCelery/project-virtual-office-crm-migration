const { EServiceName } = globalRequire('common/enums');
const {
  SERVICE_NAME_AUTHENTICATION,
  SERVICE_NAME_CLOUD,
  SERVICE_NAME_DATABASE,
  SERVICE_NAME_REDIS
} = EServiceName;

const services = {
  [SERVICE_NAME_AUTHENTICATION]: require('./authentication'),
  [SERVICE_NAME_DATABASE]: require('./database'),
  [SERVICE_NAME_CLOUD]: require('./cloud'),
  [SERVICE_NAME_REDIS]: require('./redis')
};

const get = name => {
  return services[name];
};

module.exports = {
  get
};
