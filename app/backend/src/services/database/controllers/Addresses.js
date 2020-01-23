class Addresses {
  constructor({ models, nodeModules, recordPreparator }) {
    this.models = models;
    this.nodeModules = nodeModules;
    this.recordPreparator = recordPreparator;
    this.findAll = this.findAll.bind(this);
  }

  static flattenRecord(record) {
    return {
      id: record.id,
      postcode: record.postcode,
      city_name: record.city.name,
      country_name: record.city.country.name,
      country_short_name: record.city.country.short_name,
      long_street: record.long_street
    };
  }

  async findAll({ transaction }) {
    const addresses = await this.models.Addresses.query(transaction).eager(
      'city.country'
    );

    return addresses.map(dbRecord => {
      const flattenedDbRecord = Addresses.flattenRecord(dbRecord);

      return this.recordPreparator.prepareDbRecordForReturn(flattenedDbRecord);
    });
  }
}

module.exports = Addresses;
