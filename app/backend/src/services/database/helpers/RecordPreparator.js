class RecordPreparator {
  constructor({ nodeModules }) {
    this.jsonSchema = null;
    this.nodeModules = nodeModules;
    this.flattenDbRecord = this.flattenDbRecord.bind(this);
    this.flattenEagerLoadedDbRecords = this.flattenEagerLoadedDbRecords.bind(
      this
    );
    this.prepareDbRecordForReturn = this.prepareDbRecordForReturn.bind(this);
    this.prepareRecordForDbInsert = this.prepareRecordForDbInsert.bind(this);
    this.prepareRecordForUpdate = this.prepareRecordForUpdate.bind(this);
  }

  static createInstance() {
    return new RecordPreparator();
  }

  setJsonSchema(jsonSchema) {
    this.jsonSchema = jsonSchema;

    return this;
  }

  flattenDbRecord({ dbRecord, fieldsMap }) {
    const _ = this.nodeModules.lodash;

    const flatRecord = {};

    _.forEach(fieldsMap, (pathToValue, key) => {
      const dbRecordValue = _.get(dbRecord, pathToValue);

      if (dbRecordValue === undefined) {
        throw new Error(`Invalid path -> ${pathToValue}`);
      }

      flatRecord[key] = dbRecordValue;
    });

    return flatRecord;
  }

  flattenEagerLoadedDbRecords({
    dbRecord,
    eagerLoadedRecordsPath,
    keyForEagerLoadedRecord
  }) {
    const _ = this.nodeModules.lodash;
    const eagerLoadedRecords = _.get(dbRecord, eagerLoadedRecordsPath);

    if (eagerLoadedRecords === undefined) {
      throw new Error(
        `No eager loaded records found -> ${eagerLoadedRecordsPath}`
      );
    }

    return eagerLoadedRecords.map(eagerLoadedRecord => {
      return {
        ...dbRecord,
        [keyForEagerLoadedRecord]: eagerLoadedRecord
      };
    });
  }

  prepareDbRecordForReturn(dbRecord) {
    if (!dbRecord) {
      return null;
    }

    const _ = this.nodeModules.lodash;
    const final = {};

    _.forEach(dbRecord, (value, key) => {
      final[_.camelCase(key)] = value;
    });

    return final;
  }

  prepareRecordForDbInsert(recordToPrepare) {
    const _ = this.nodeModules.lodash;
    const final = {};

    _.forEach(recordToPrepare, (value, key) => {
      final[_.snakeCase(key)] = value;
    });

    return final;
  }

  prepareRecordForUpdate(recordToPrepare) {
    const _ = this.nodeModules.lodash;

    const final = {};

    _.forEach(recordToPrepare, (value, key) => {
      if (_.isNil(value)) {
        return;
      }

      final[_.snakeCase(key)] = value;
    });

    return final;
  }
}

module.exports = RecordPreparator;
