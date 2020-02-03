class RecordFlattener {
  static get RECORD_TYPE() {
    return {
      ADDRESS: 'ADDRESS'
    };
  }

  static createInstance() {
    return new RecordFlattener();
  }

  _flattenAddress(record) {
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

  flatten({ type, record }) {
    switch (type) {
      case RecordFlattener.RECORD_TYPE.ADDRESS:
        return this._flattenAddress(record);
      default:
        throw new Error(`Invalid flatten method ${type}`);
    }
  }
}

module.exports = RecordFlattener;
