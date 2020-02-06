const controllers = require('./controllers');
const models = require('./models');
const dbUtils = require('./utils');

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

  async start({ CErrorMessage, EServiceMethod, config, nodeModules, utils }) {
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
      SERVICE_METHOD_CREATE_NATURAL_PERSON,
      SERVICE_METHOD_GET_ALL_ENTITY_NAMES,
      SERVICE_METHOD_CREATE_ENTITY_NAME
    } = EServiceMethod;

    const { Knex, objection } = nodeModules;
    const { Model } = objection;

    this.knex = Knex(config.get(['database', config.get('nodeEnv')]));
    Model.knex(this.knex);

    const {
      Addresses,
      Cities,
      Countries,
      EntityNames,
      NaturalPeople,
      Users
    } = controllers;

    this.controllers = {
      addresses: new Addresses({ dbUtils, models }),
      cities: new Cities({ dbUtils, models }),
      countries: new Countries({ dbUtils, models }),
      entityNames: new EntityNames({ dbUtils, models }),
      naturalPeople: new NaturalPeople({ dbUtils, models }),
      users: new Users({ CErrorMessage, dbUtils, models })
    };

    this.methodExecutor = utils.MethodExecutor.createInstance()
      .register({
        path: SERVICE_METHOD_GET_ALL_ENTITY_NAMES,
        method: this._wrapController({
          objection,
          controller: 'entityNames',
          method: 'findAll'
        })
      })
      .register({
        path: SERVICE_METHOD_CREATE_ENTITY_NAME,
        method: this._wrapController({
          objection,
          controller: 'entityNames',
          method: 'create'
        })
      })
      .register({
        path: SERVICE_METHOD_GET_ALL_ADDRESSES,
        method: this._wrapController({
          objection,
          controller: 'addresses',
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
        path: SERVICE_METHOD_GET_ALL_NATURAL_PEOPLE_FOR_QUICK_SEARCH,
        method: this._wrapController({
          objection,
          controller: 'naturalPeople',
          method: 'getLatestVersionsOfAllRecordsForQuickSearch'
        })
      })
      .register({
        path: SERVICE_METHOD_CREATE_NATURAL_PERSON,
        method: this._wrapController({
          objection,
          controller: 'naturalPeople',
          method: 'create'
        })
      });

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
