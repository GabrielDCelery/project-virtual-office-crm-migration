const methods = require('./methods');
const {
  ORCHESTRATOR_METHOD_AUTHENTICATE_USER_BY_COOKIE,
  ORCHESTRATOR_METHOD_GET_ALL_ADDRESSES,
  ORCHESTRATOR_METHOD_LOGIN_USER,
  ORCHESTRATOR_METHOD_GET_ALL_COUNTRIES,
  ORCHESTRATOR_METHOD_GET_ALL_CITIES,
  ORCHESTRATOR_METHOD_FILTER_ADDRESSES,
  ORCHESTRATOR_METHOD_FILTER_COUNTRIES,
  ORCHESTRATOR_METHOD_FILTER_CITIES,
  ORCHESTRATOR_METHOD_CREATE_ADDRESS,
  ORCHESTRATOR_METHOD_FILTER_NATURAL_PEOPLE,
  ORCHESTRATOR_METHOD_CREATE_NATURAL_PERSON
} = globalRequire('common/enums');
const { MethodExecutor } = globalRequire('common/utils');

class Orchestrator {
  constructor() {
    this.initialized = false;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.methodExecutor = new MethodExecutor();
  }

  async start({ services }) {
    if (this.initialized) {
      throw new Error('Tried to initialize orchestrator twice!');
    }

    this.methodExecutor
      .register({
        path: ORCHESTRATOR_METHOD_AUTHENTICATE_USER_BY_COOKIE,
        method: methods.authenticateUserByCookie({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_GET_ALL_ADDRESSES,
        method: methods.getAllAddresses({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_GET_ALL_COUNTRIES,
        method: methods.getAllCountries({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_GET_ALL_CITIES,
        method: methods.getAllCities({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_LOGIN_USER,
        method: methods.loginUser({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_FILTER_ADDRESSES,
        method: methods.filterAddresses({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_FILTER_COUNTRIES,
        method: methods.filterCountries({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_FILTER_CITIES,
        method: methods.filterCities({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_CREATE_ADDRESS,
        method: methods.createAddress({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_FILTER_NATURAL_PEOPLE,
        method: methods.filterNaturalPeople({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_CREATE_NATURAL_PERSON,
        method: methods.createNaturalPerson({ services })
      });

    this.initialized = true;

    return this;
  }

  async stop() {
    this.initialized = false;
  }

  async execute({ method, parameters }) {
    return await this.methodExecutor.execute({
      method,
      parameters
    });
  }
}

module.exports = new Orchestrator();
