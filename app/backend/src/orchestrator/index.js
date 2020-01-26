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
  ORCHESTRATOR_METHOD_LOGIN_USER
} = EOrchestratorMethod;

class Orchestrator {
  constructor() {
    this.initialized = false;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this._execute = this._execute.bind(this);
    this.method = this.method.bind(this);
    this.executeOld = this.executeOld.bind(this);
  }

  initialize({ services }) {
    const { authenticateUserByCookie, getAllAddresses, loginUser } = methods;

    this.methods = {
      [ORCHESTRATOR_METHOD_AUTHENTICATE_USER_BY_COOKIE]: authenticateUserByCookie(
        { services }
      ),
      [ORCHESTRATOR_METHOD_GET_ALL_ADDRESSES]: getAllAddresses({ services }),
      [ORCHESTRATOR_METHOD_LOGIN_USER]: loginUser({ services })
    };

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
    this.initialize({ services });
    this.initialized = true;

    return this;
  }

  async stop() {
    this.initialized = false;
  }

  async _execute(method, argsObj) {
    try {
      return {
        success: true,
        error: null,
        payload: await this.methods[method](argsObj || {})
      };
    } catch (error) {
      return {
        success: false,
        error,
        payload: null
      };
    }
  }

  method(method) {
    return {
      execute: async argsObj => await this._execute(method, argsObj)
    };
  }

  async executeOld(instanceName, methodName, args) {
    return this.instances[instanceName][methodName](args);
  }
}

module.exports = new Orchestrator();
