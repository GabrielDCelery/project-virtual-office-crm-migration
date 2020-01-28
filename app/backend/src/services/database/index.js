const Knex = require('knex');
const config = require('./config');
const controllers = require('./controllers');
const models = require('./models');
const { Model, transaction } = require('objection');
const { RecordPreparator } = require('./helpers');
const {
  DB_SERVICE_NAME,
  DB_ERROR_NAME_CONTROLLER_ERROR
} = require('./constants');
const { EServiceMethod } = globalRequire('common/enums');
const {
  SERVICE_METHOD_GET_ALL_ADDRESSES,
  SERVICE_METHOD_GET_USER_RULES,
  SERVICE_METHOD_LOGIN_USER
} = EServiceMethod;

class MethodExecutor {
  constructor(method) {
    this.m = method;
    this.execute = this.execute.bind(this);
    this.result = this.result.bind(this);
  }

  async execute(argsObj) {
    const { result, transatction } = await this.m(argsObj);
    this.calcResult = result;

    return this.calcResult;
  }

  result() {
    return this.calcResult;
  }
}

class DB {
  constructor() {
    this.knex = null;
    this.initialized = false;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.getKnex = this.getKnex.bind(this);
    this._executeController = this._executeController.bind(this);
    this.method = this.method.bind(this);
  }

  initialize({ nodeModules }) {
    const {
      Addresses,
      Cities,
      Countries,
      Documents,
      DocumentsCloud,
      DocumentsTemporary,
      LegalEntities,
      MailsAuditTrails,
      MailsPendingActions,
      MailSenderNames,
      MailSenders,
      MailSubjects,
      Mails,
      NaturalPeople,
      Users
    } = controllers;

    this.controllers = {
      addresses: new Addresses({
        models,
        nodeModules,
        recordPreparator: new RecordPreparator({ nodeModules })
      }),
      cities: new Cities({
        models,
        nodeModules,
        recordPreparator: new RecordPreparator({ nodeModules })
      }),
      countries: new Countries({
        models,
        nodeModules,
        recordPreparator: new RecordPreparator({ nodeModules })
      }),
      documents: new Documents({
        models,
        nodeModules
      }),
      documentsCloud: new DocumentsCloud({
        models,
        nodeModules,
        recordPreparator: new RecordPreparator({ nodeModules })
      }),
      documentsTemporary: new DocumentsTemporary({
        models,
        nodeModules,
        recordPreparator: new RecordPreparator({ nodeModules })
      }),
      legalEntities: new LegalEntities({
        models,
        nodeModules,
        recordPreparator: new RecordPreparator({ nodeModules })
      }),
      mails: new Mails({
        models,
        nodeModules,
        recordPreparator: new RecordPreparator({ nodeModules })
      }),
      mailSenders: new MailSenders({
        models,
        nodeModules,
        recordPreparator: new RecordPreparator({ nodeModules })
      }),
      mailSenderNames: new MailSenderNames({
        models,
        nodeModules,
        recordPreparator: new RecordPreparator({ nodeModules })
      }),
      mailSubjects: new MailSubjects({
        models,
        nodeModules,
        recordPreparator: new RecordPreparator({ nodeModules })
      }),
      mailsAuditTrails: new MailsAuditTrails({
        models,
        nodeModules,
        recordPreparator: new RecordPreparator({ nodeModules })
      }),
      mailsPendingActions: new MailsPendingActions({
        models,
        nodeModules,
        recordPreparator: new RecordPreparator({ nodeModules })
      }),
      naturalPeople: new NaturalPeople({
        models,
        nodeModules,
        recordPreparator: new RecordPreparator({ nodeModules })
      }),
      users: new Users({
        models,
        nodeModules
      })
    };

    this.methods = {
      [SERVICE_METHOD_GET_ALL_ADDRESSES]: async argsObj => {
        return await this._executeController('addresses', 'findAll', argsObj);
      },
      [SERVICE_METHOD_LOGIN_USER]: async argsObj => {
        return await this._executeController('users', 'login', argsObj);
      },
      [SERVICE_METHOD_GET_USER_RULES]: async argsObj => {
        return await this._executeController('users', 'getRules', argsObj);
      }
    };
  }

  async start({ environmentVariables, nodeModules, helpers }) {
    if (this.initialized) {
      throw new Error('Tried to initialize the database twice!');
    }

    const initializedConfig = config(environmentVariables);
    const { NODE_ENV } = environmentVariables;
    this.knex = Knex(initializedConfig['connection'][NODE_ENV]);
    Model.knex(this.knex);
    this.initialize({
      nodeModules
    });
    this.helpers = helpers;
    this.initialized = true;
  }

  async stop() {
    this.knex.destroy();
    this.initialized = false;
  }

  getKnex() {
    return this.knex;
  }

  async createTransaction() {
    return await transaction.start(Model.knex());
  }

  async commitTransaction({ transaction }) {
    return await transaction.commit();
  }

  async rollbackTransaction({ transaction }) {
    return await transaction.rollback();
  }

  method(method) {
    return new MethodExecutor(this.methods[method]);
  }

  async _executeController(controller, method, args = {}) {
    const { ServiceResultWrapper } = this.helpers;

    const trx = args['transaction']
      ? args['transaction']
      : await transaction.start(Model.knex());

    try {
      const result = await this.controllers[controller][method]({
        ...args,
        transaction: trx
      });

      const returnObj = {
        result,
        extra: { transaction: null }
      };
      /*
      const returnObj = {
        type: ServiceResultWrapper.TYPE.SUCCESS,
        service: DB_SERVICE_NAME,
        payload: result
      };
      */
      if (!args['bKeepTransactionAlive']) {
        await trx.commit();
      } else {
        returnObj.extra.transaction = trx;
      }

      return returnObj;
    } catch (error) {
      await trx.rollback();

      throw error;

      if (error.name !== DB_ERROR_NAME_CONTROLLER_ERROR) {
        throw error;
      }

      return new ServiceResultWrapper().wrap({
        type: ServiceResultWrapper.TYPE.FAIL,
        service: DB_SERVICE_NAME,
        errors: [error]
      });
    }
  }
}

module.exports = new DB();
