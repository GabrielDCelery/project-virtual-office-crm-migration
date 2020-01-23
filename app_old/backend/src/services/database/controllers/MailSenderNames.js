class MailSenderNames {
  constructor({ models, nodeModules, recordPreparator }) {
    this.models = models;
    this.nodeModules = nodeModules;
    this.recordPreparator = recordPreparator;
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
  }

  async create({ name, transaction }) {
    const dbRecord = await this.models.ContactNames.query(transaction)
      .where({
        name
      })
      .first();

    if (dbRecord) {
      return this.recordPreparator.prepareDbRecordForReturn(dbRecord);
    }

    const newDbRecord = await this.models.ContactNames.query(
      transaction
    ).insert({
      name
    });

    return this.recordPreparator.prepareDbRecordForReturn(newDbRecord);
  }

  async findAll({ transaction }) {
    const mailSenderNames = await this.models.ContactNames.query(transaction);

    return mailSenderNames.map(dbRecord => {
      return this.recordPreparator.prepareDbRecordForReturn(dbRecord);
    });
  }
}

module.exports = MailSenderNames;
