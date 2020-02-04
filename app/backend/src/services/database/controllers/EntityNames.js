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
    const {
      removeExtraWhiteSpaces,
      startCaseWords
    } = this.dbUtils.data.normalizer;

    const normalizedName = startCaseWords(removeExtraWhiteSpaces(name));

    const existingRecord = await this.models.EntityNames.query(
      transaction
    ).findOne({
      name: normalizedName
    });

    if (existingRecord) {
      return existingRecord;
    }

    const record = await this.models.EntityNames.query(
      transaction
    ).insertAndFetch({ name: normalizedName });

    return record;
  }
}

module.exports = EntityNames;
