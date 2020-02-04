class Addresses {
  constructor({ models, dbUtils }) {
    this.dbUtils = dbUtils;
    this.models = models;
  }

  async findAll({ transaction }) {
    const { prepareDbRecordForReturn } = this.dbUtils.record.preparator;
    const { flattenAddress } = this.dbUtils.record.flattener;
    const records = await this.models.Addresses.query(transaction).eager(
      'city.country'
    );

    return records.map(record => {
      return prepareDbRecordForReturn(flattenAddress(record));
    });
  }

  async create({ postcode, city, street, transaction }) {
    const { prepareDbRecordForReturn } = this.dbUtils.record.preparator;
    const { flattenAddress } = this.dbUtils.record.flattener;
    const record = await this.models.Addresses.query(transaction)
      .insertAndFetch({ postcode, city_id: city, long_street: street })
      .eager('city.country');

    return prepareDbRecordForReturn(flattenAddress(record));
  }
}

module.exports = Addresses;
