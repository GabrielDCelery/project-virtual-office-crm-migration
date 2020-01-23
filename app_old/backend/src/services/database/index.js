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

class DB {
  constructor() {
    this.knex = null;
    this.initialized = false;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.getKnex = this.getKnex.bind(this);
    this.execute = this.execute.bind(this);
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

  async execute(controller, method, args = {}) {
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
        type: ServiceResultWrapper.TYPE.SUCCESS,
        service: DB_SERVICE_NAME,
        payload: result
      };

      if (!args['bKeepTransactionAlive']) {
        await trx.commit();
      }

      return new ServiceResultWrapper().wrap(returnObj);
    } catch (error) {
      await trx.rollback();

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
