const Knex = require('knex');
const config = require('./config');
const controllers = require('./controllers');
const models = require('./models');
const { Model, transaction } = require('objection');
const { MethodExecutor } = globalRequire('common/utils');
const { RecordPreparator } = require('./helpers');
const {
  SERVICE_METHOD_GET_ALL_ADDRESSES,
  SERVICE_METHOD_GET_USER_RULES,
  SERVICE_METHOD_LOGIN_USER,
  SERVICE_METHOD_GET_ALL_CITIES,
  SERVICE_METHOD_GET_ALL_COUNTRIES
} = globalRequire('common/enums');

class DB {
  constructor() {
    this.knex = null;
    this.initialized = false;
    this.methodExecutor = new MethodExecutor();
    this._wrapController = this._wrapController.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.getKnex = this.getKnex.bind(this);
    this.execute = this.execute.bind(this);
  }

  _wrapController(controller, method) {
    return async parameters => {
      const trx = parameters['transaction']
        ? parameters['transaction']
        : await transaction.start(Model.knex());

      try {
        const result = await this.controllers[controller][method]({
          ...parameters,
          transaction: trx
        });

        const returnObj = { result, transaction: null };

        if (!parameters['bKeepTransactionAlive']) {
          await trx.commit();
        } else {
          returnObj.transaction = trx;
        }

        return returnObj;
      } catch (error) {
        await trx.rollback();

        throw error;
      }
    };
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

    this.methodExecutor
      .register({
        path: SERVICE_METHOD_GET_ALL_ADDRESSES,
        method: this._wrapController('addresses', 'findAll')
      })
      .register({
        path: SERVICE_METHOD_LOGIN_USER,
        method: this._wrapController('users', 'login')
      })
      .register({
        path: SERVICE_METHOD_GET_USER_RULES,
        method: this._wrapController('users', 'getRules')
      })
      .register({
        path: SERVICE_METHOD_GET_ALL_CITIES,
        method: this._wrapController('cities', 'findAll')
      })
      .register({
        path: SERVICE_METHOD_GET_ALL_COUNTRIES,
        method: this._wrapController('countries', 'findAll')
      });
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

  async execute({ method, parameters }) {
    return await this.methodExecutor.execute({
      method,
      parameters
    });
  }
}

module.exports = new DB();
