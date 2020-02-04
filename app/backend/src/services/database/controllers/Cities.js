class Cities {
  constructor({ dbUtils, models }) {
    this.dbUtils = dbUtils;
    this.models = models;
  }

  async findAll({ transaction }) {
    const { prepareDbRecordForReturn } = this.dbUtils.record.preparator;
    const { flattenCity } = this.dbUtils.record.flattener;
    const records = await this.models.Cities.query(transaction).eager(
      'country'
    );

    return records.map(record => {
      return prepareDbRecordForReturn(flattenCity(record));
    });
  }
}

module.exports = Cities;
