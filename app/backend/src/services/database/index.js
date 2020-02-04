const controllers = require('./controllers');
const models = require('./models');
const { RecordPreparator, RecordFlattener } = require('./helpers');

class DB {
  constructor() {
    this.knex = null;
    this.initialized = false;
    this.methodExecutor = null;
    this._wrapController = this._wrapController.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.getKnex = this.getKnex.bind(this);
    this.execute = this.execute.bind(this);
  }

  _wrapController({ controller, method, objection }) {
    const { Model, transaction } = objection;

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

  async start({ EServiceMethod, config, nodeModules, utils, helpers }) {
    if (this.initialized) {
      throw new Error('Tried to initialize the database twice!');
    }

    const {
      SERVICE_METHOD_GET_ALL_ADDRESSES,
      SERVICE_METHOD_GET_USER_RULES,
      SERVICE_METHOD_LOGIN_USER,
      SERVICE_METHOD_GET_ALL_CITIES,
      SERVICE_METHOD_GET_ALL_COUNTRIES,
      SERVICE_METHOD_CREATE_ADDRESS,
      SERVICE_METHOD_GET_ALL_NATURAL_PEOPLE_FOR_QUICK_SEARCH,
      SERVICE_METHOD_CREATE_NATURAL_PERSON
    } = EServiceMethod;

    const { Knex, objection } = nodeModules;
    const { Model } = objection;

    this.knex = Knex(config.get(['database', config.get('nodeEnv')]));
    Model.knex(this.knex);

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
        helpers: { RecordFlattener, RecordPreparator },
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
        helpers: { RecordFlattener },
        models,
        nodeModules,
        recordPreparator: new RecordPreparator({ nodeModules })
      }),
      users: new Users({
        models,
        nodeModules
      })
    };

    this.methodExecutor = utils.MethodExecutor.createInstance()
      .register({
        path: SERVICE_METHOD_GET_ALL_ADDRESSES,
        method: this._wrapController({
          objection,
          controller: 'addresses',
          method: 'findAll'
        })
      })
      .register({
        path: SERVICE_METHOD_LOGIN_USER,
        method: this._wrapController({
          objection,
          controller: 'users',
          method: 'login'
        })
      })
      .register({
        path: SERVICE_METHOD_GET_USER_RULES,
        method: this._wrapController({
          objection,
          controller: 'users',
          method: 'getRules'
        })
      })
      .register({
        path: SERVICE_METHOD_GET_ALL_CITIES,
        method: this._wrapController({
          objection,
          controller: 'cities',
          method: 'findAll'
        })
      })
      .register({
        path: SERVICE_METHOD_GET_ALL_COUNTRIES,
        method: this._wrapController({
          objection,
          controller: 'countries',
          method: 'findAll'
        })
      })
      .register({
        path: SERVICE_METHOD_CREATE_ADDRESS,
        method: this._wrapController({
          objection,
          controller: 'addresses',
          method: 'create'
        })
      })
      .register({
        path: SERVICE_METHOD_GET_ALL_NATURAL_PEOPLE_FOR_QUICK_SEARCH,
        method: this._wrapController({
          objection,
          controller: 'naturalPeople',
          method: 'getLatestVersionsOfAllRecordsForQuickSearch'
        })
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
