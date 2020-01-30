const addresses = require('./addresses');
const cities = require('./cities');
const countries = require('./countries');
const legalEntities = require('./legalEntities');
const mailSenderNames = require('./mailSenderNames');
const mailSenders = require('./mailSenders');
const mailSubjects = require('./mailSubjects');
const mails = require('./mails');
const mailsPendingActions = require('./mailsPendingActions');
const users = require('./users');
const methods = require('./methods');
const { EOrchestratorMethod } = globalRequire('common/enums');
const {
  ORCHESTRATOR_METHOD_AUTHENTICATE_USER_BY_COOKIE,
  ORCHESTRATOR_METHOD_GET_ALL_ADDRESSES,
  ORCHESTRATOR_METHOD_LOGIN_USER,
  ORCHESTRATOR_METHOD_GET_ALL_COUNTRIES,
  ORCHESTRATOR_METHOD_GET_ALL_CITIES
} = EOrchestratorMethod;
const { MethodExecutor } = globalRequire('common/utils');

class Orchestrator {
  constructor() {
    this.initialized = false;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.methodExecutor = new MethodExecutor();
  }

  initialize({ services }) {
    const {
      authenticateUserByCookie,
      getAllAddresses,
      getAllCities,
      getAllCountries,
      loginUser
    } = methods;

    this.methodExecutor
      .register({
        path: ORCHESTRATOR_METHOD_AUTHENTICATE_USER_BY_COOKIE,
        method: authenticateUserByCookie({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_GET_ALL_ADDRESSES,
        method: getAllAddresses({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_GET_ALL_COUNTRIES,
        method: getAllCountries({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_GET_ALL_CITIES,
        method: getAllCities({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_LOGIN_USER,
        method: loginUser({ services })
      });

    this.instances = {
      addresses: {
        findAll: addresses.findAllWrapper(services)
      },
      cities: {
        findAll: cities.findAllWrapper(services)
      },
      countries: {
        findAll: countries.findAllWrapper(services)
      },
      legalEntities: {
        update: legalEntities.updateWrapper(services),
        getAllVersionsOfAllRecords: legalEntities.getAllVersionsOfAllEntitiesWrapper(
          services
        ),
        getLatestVersionsOfAllRecords: legalEntities.getLatestVersionsOfAllRecordsWrapper(
          { services }
        ),
        getTypes: legalEntities.getTypesWrapper({ services })
      },
      mails: {
        create: mails.createWrapper(services)
      },
      mailSenders: {
        findAll: mailSenders.findAllWrapper(services)
      },
      mailSenderNames: {
        create: mailSenderNames.createWrapper(services),
        findAll: mailSenderNames.findAllWrapper(services)
      },
      mailSubjects: {
        create: mailSubjects.createWrapper(services),
        findAll: mailSubjects.findAllWrapper(services)
      },
      mailsPendingActions: {
        findAllPendingEmailNotifications: mailsPendingActions.findAllPendingEmailNotificationsWrapper(
          services
        ),
        sendEmailNotificationsForReceivedMails: mailsPendingActions.sendEmailNotificationsForReceivedMailsWrapper(
          services
        )
      },
      users: {
        authenticateByCookie: users.authenticateByCookieWrapper(services),
        login: users.loginWrapper(services)
      }
    };
  }

  async start({ services }) {
    if (this.initialized) {
      throw new Error('Tried to initialize orchestrator twice!');
    }

    const {
      authenticateUserByCookie,
      getAllAddresses,
      getAllCities,
      getAllCountries,
      loginUser
    } = methods;

    this.methodExecutor
      .register({
        path: ORCHESTRATOR_METHOD_AUTHENTICATE_USER_BY_COOKIE,
        method: authenticateUserByCookie({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_GET_ALL_ADDRESSES,
        method: getAllAddresses({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_GET_ALL_COUNTRIES,
        method: getAllCountries({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_GET_ALL_CITIES,
        method: getAllCities({ services })
      })
      .register({
        path: ORCHESTRATOR_METHOD_LOGIN_USER,
        method: loginUser({ services })
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
