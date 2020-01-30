class Cities {
  constructor({ models, nodeModules, recordPreparator }) {
    this.models = models;
    this.nodeModules = nodeModules;
    this.recordPreparator = recordPreparator;
    this.findAll = this.findAll.bind(this);
  }

  static flattenRecord(record) {
    return {
      id: record.id,
      name: record.name,
      country_id: record.country_id
      /*
      country_name: record.country.name,
      country_short_name: record.country.short_name
      */
    };
  }

  async findAll({ transaction }) {
    const cities = await this.models.Cities.query(
      transaction
    ); /*.eager('country')*/

    return cities.map(dbRecord => {
      const flattenedDbRecord = Cities.flattenRecord(dbRecord);
      return this.recordPreparator.prepareDbRecordForReturn(flattenedDbRecord);
    });
  }
}

module.exports = Cities;
