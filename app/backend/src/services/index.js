const services = {
  authentication: require('./authentication'),
  database: require('./database'),
  cloud: require('./cloud'),
  redis: require('./redis')
};

const get = name => {
  return services[name];
};

module.exports = {
  get
};
