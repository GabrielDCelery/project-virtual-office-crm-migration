class EntityNames {
  constructor({ models, dbUtils }) {
    this.dbUtils = dbUtils;
    this.models = models;
  }

  async findAll({ transaction }) {
    const records = await this.models.EntityNames.query(transaction);

    return records;
  }

  async create({ name, transaction }) {
    const record = await this.models.EntityNames.query(
      transaction
    ).insertAndFetch({ name });

    return record;
  }
}

module.exports = EntityNames;
