class RecordFlattener {
  constructor() {
    this.flattenCity = this.flattenCity.bind(this);
    this.flattenAddress = this.flattenAddress.bind(this);
  }

  flattenCity(record) {
    return {
      id: record.id,
      name: record.name,
      country_id: record.country_id,
      country_name: record.country.name,
      country_short_name: record.country.short_name
    };
  }

  flattenAddress(record) {
    return record
      ? {
          id: record.id,
          postcode: record.postcode,
          city_name: record.city.name,
          country_name: record.city.country.name,
          country_short_name: record.city.country.short_name,
          long_street: record.long_street
        }
      : null;
  }
}

module.exports = RecordFlattener;
