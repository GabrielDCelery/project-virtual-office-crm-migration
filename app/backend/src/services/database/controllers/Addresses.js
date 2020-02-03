class Addresses {
  constructor({ helpers, models, nodeModules, recordPreparator }) {
    this.helpers = helpers;
    this.models = models;
    this.nodeModules = nodeModules;
    this.recordPreparator = recordPreparator;
    this.findAll = this.findAll.bind(this);
  }

  async findAll({ transaction }) {
    const { RecordFlattener } = this.helpers;
    const records = await this.models.Addresses.query(transaction).eager(
      'city.country'
    );

    return records.map(record => {
      const flattenedDbRecord = RecordFlattener.createInstance().flatten({
        type: RecordFlattener.RECORD_TYPE.ADDRESS,
        record
      });

      return this.recordPreparator.prepareDbRecordForReturn(flattenedDbRecord);
    });
  }

  async create({ postcode, city, street, transaction }) {
    const record = await this.models.Addresses.query(transaction)
      .insertAndFetch({ postcode, city_id: city, long_street: street })
      .eager('city.country');

    const flattenedDbRecord = RecordFlattener.createInstance().flatten({
      type: RecordFlattener.RECORD_TYPE.ADDRESS,
      record
    });

    return this.recordPreparator.prepareDbRecordForReturn(flattenedDbRecord);
  }
}

module.exports = Addresses;
