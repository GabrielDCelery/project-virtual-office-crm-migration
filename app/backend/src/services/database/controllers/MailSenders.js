class MailSenders {
  constructor({ models, nodeModules, recordPreparator }) {
    this.models = models;
    this.nodeModules = nodeModules;
    this.recordPreparator = recordPreparator;
    this.findAll = this.findAll.bind(this);
  }

  static flattenRecord(record) {
    return {
      id: record.id,
      postcode: record.address.postcode,
      city_name: record.address.city.name,
      country_name: record.address.city.country.name,
      country_short_name: record.address.city.country.short_name,
      long_street: record.address.long_street,
      sender_name: record.contact_name.name
    };
  }

  async findAll({ transaction }) {
    const mailSenders = await this.models.Contacts.query(transaction).eager(
      '[address.city.country, contact_name]'
    );

    return mailSenders.map(dbRecord => {
      const flattenedDbRecord = MailSenders.flattenRecord(dbRecord);
      return this.recordPreparator.prepareDbRecordForReturn(flattenedDbRecord);
    });
  }
}

module.exports = MailSenders;
