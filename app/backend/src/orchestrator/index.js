const methods = require('./methods');

class Orchestrator {
  constructor() {
    this.initialized = false;
    this.methodExecutor = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  async start({
    EOrchestratorMethod,
    EServiceMethod,
    EServiceName,
    ERedisKeys,
    services,
    utils
  }) {
    if (this.initialized) {
      throw new Error('Tried to initialize orchestrator twice!');
    }

    const {
      ORCHESTRATOR_METHOD_VERIFY_USER_BY_JWT,
      ORCHESTRATOR_METHOD_GET_ALL_ADDRESSES,
      ORCHESTRATOR_METHOD_LOGIN_USER,
      ORCHESTRATOR_METHOD_GET_ALL_COUNTRIES,
      ORCHESTRATOR_METHOD_GET_ALL_CITIES,
      ORCHESTRATOR_METHOD_FILTER_ADDRESSES,
      ORCHESTRATOR_METHOD_FILTER_COUNTRIES,
      ORCHESTRATOR_METHOD_FILTER_CITIES,
      ORCHESTRATOR_METHOD_CREATE_ADDRESS,
      ORCHESTRATOR_METHOD_FILTER_NATURAL_PEOPLE,
      ORCHESTRATOR_METHOD_CREATE_NATURAL_PERSON,
      ORCHESTRATOR_METHOD_FILTER_ENTITY_NAMES,
      ORCHESTRATOR_METHOD_CREATE_ENTITY_NAME
    } = EOrchestratorMethod;

    const methodInitializer = ({ path, method }) => {
      return {
        path,
        method: method({
          services,
          EServiceMethod,
          EServiceName,
          ERedisKeys,
          utils
        })
      };
    };

    this.methodExecutor = utils.MethodExecutor.createInstance()
      .register(
        methodInitializer({
          path: ORCHESTRATOR_METHOD_FILTER_ENTITY_NAMES,
          method: methods.filterEntityNames
        })
      )
      .register({
        path: ORCHESTRATOR_METHOD_CREATE_ENTITY_NAME,
        method: methods.createEntityName({
          services,
          EServiceMethod,
          EServiceName,
          ERedisKeys,
          utils
        })
      })
      .register({
        path: ORCHESTRATOR_METHOD_VERIFY_USER_BY_JWT,
        method: methods.authenticateUserByCookie({
          services,
          ERedisKeys,
          EServiceMethod,
          EServiceName
        })
      })
      .register({
        path: ORCHESTRATOR_METHOD_GET_ALL_ADDRESSES,
        method: methods.getAllAddresses({
          services,
          EServiceMethod,
          EServiceName
        })
      })
      .register({
        path: ORCHESTRATOR_METHOD_GET_ALL_COUNTRIES,
        method: methods.getAllCountries({
          services,
          EServiceMethod,
          EServiceName
        })
      })
      .register({
        path: ORCHESTRATOR_METHOD_GET_ALL_CITIES,
        method: methods.getAllCities({ services, EServiceMethod, EServiceName })
      })
      .register({
        path: ORCHESTRATOR_METHOD_LOGIN_USER,
        method: methods.loginUser({ services, EServiceMethod, EServiceName })
      })
      .register({
        path: ORCHESTRATOR_METHOD_FILTER_ADDRESSES,
        method: methods.filterAddresses({
          services,
          utils,
          EServiceMethod,
          EServiceName,
          ERedisKeys
        })
      })
      .register({
        path: ORCHESTRATOR_METHOD_FILTER_COUNTRIES,
        method: methods.filterCountries({
          services,
          utils,
          EServiceMethod,
          EServiceName,
          ERedisKeys
        })
      })
      .register({
        path: ORCHESTRATOR_METHOD_FILTER_CITIES,
        method: methods.filterCities({
          services,
          utils,
          EServiceMethod,
          EServiceName,
          ERedisKeys
        })
      })
      .register({
        path: ORCHESTRATOR_METHOD_CREATE_ADDRESS,
        method: methods.createAddress({
          services,
          EServiceMethod,
          EServiceName,
          ERedisKeys
        })
      })
      .register({
        path: ORCHESTRATOR_METHOD_FILTER_NATURAL_PEOPLE,
        method: methods.filterNaturalPeople({
          EServiceMethod,
          EServiceName,
          ERedisKeys,
          services,
          utils
        })
      })
      .register({
        path: ORCHESTRATOR_METHOD_CREATE_NATURAL_PERSON,
        method: methods.createNaturalPerson({
          services,
          EServiceMethod,
          EServiceName,
          ERedisKeys
        })
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
