class MailSubjects {
  constructor({ models, nodeModules, recordPreparator }) {
    this.models = models;
    this.nodeModules = nodeModules;
    this.recordPreparator = recordPreparator;
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
  }

  async create({ longSubject, transaction }) {
    const preparedRecordForInsert = this.recordPreparator.prepareRecordForDbInsert(
      {
        longSubject
      }
    );
    const dbRecord = await this.models.MailSubjects.query(transaction)
      .where(preparedRecordForInsert)
      .first();

    if (dbRecord) {
      return this.recordPreparator.prepareDbRecordForReturn(dbRecord);
    }

    const newDbRecord = await this.models.MailSubjects.query(
      transaction
    ).insert(preparedRecordForInsert);

    return this.recordPreparator.prepareDbRecordForReturn(newDbRecord);
  }

  async findAll({ transaction }) {
    const mailSubjects = await this.models.MailSubjects.query(transaction);

    return mailSubjects.map(dbRecord => {
      return this.recordPreparator.prepareDbRecordForReturn(dbRecord);
    });
  }
}

module.exports = MailSubjects;
