class Countries {
  constructor({ dbUtils, models }) {
    this.dbUtils = dbUtils;
    this.models = models;
  }

  async findAll({ transaction }) {
    const { prepareDbRecordForReturn } = this.dbUtils.record.preparator;
    const records = await this.models.Countries.query(transaction);

    return records.map(record => {
      return prepareDbRecordForReturn(record);
    });
  }
}

module.exports = Countries;
