class Countries {
  constructor({ models, nodeModules, recordPreparator }) {
    this.models = models;
    this.nodeModules = nodeModules;
    this.recordPreparator = recordPreparator;
    this.findAll = this.findAll.bind(this);
  }

  async findAll({ transaction }) {
    const countries = await this.models.Countries.query(transaction);

    return countries.map(dbRecord => {
      return this.recordPreparator.prepareDbRecordForReturn(dbRecord);
    });
  }
}

module.exports = Countries;
