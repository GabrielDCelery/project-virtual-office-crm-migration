const HistoryRecordChanges = require('./HistoryRecordChanges');

class NaturalPeople {
  constructor({ dbUtils, models }) {
    this.dbUtils = dbUtils;
    this.models = models;
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.getLatestVersionsOfAllRecords = this.getLatestVersionsOfAllRecords.bind(
      this
    );
    this.getAllVersionsOfSingleRecord = this.getAllVersionsOfSingleRecord.bind(
      this
    );
    this.getAllVersionsOfAllRecords = this.getAllVersionsOfAllRecords.bind(
      this
    );
  }

  async create({
    firstName,
    lastName,
    motherName,
    birthDate,
    identifierDocumentType,
    identifierDocumentNumber,
    permanentAddressId,
    transaction
  }) {
    const {
      prepareRecordForDbInsert,
      prepareDbRecordForReturn
    } = this.dbUtils.record.preparator;

    const recordToInsert = prepareRecordForDbInsert({
      firstName,
      lastName,
      motherName,
      birthDate,
      identifierDocumentType,
      identifierDocumentNumber,
      permanentAddressId
    });

    const record = await this.models.NaturalPeople.query(
      transaction
    ).insertAndFetch(recordToInsert);

    return prepareDbRecordForReturn(record);
  }

  async update({ id, transaction, ...inputs }) {
    const {
      prepareDbRecordForReturn,
      prepareRecordForUpdate,
      prepareRecordForDbInsert
    } = this.dbUtils.record.preparator;

    const oldRecord = await this.models.NaturalPeople.query(
      transaction
    ).findById(id);
    const preparedRecordForUpdate = prepareRecordForUpdate({ ...inputs });
    const preparedHistoryRecords = HistoryRecordChanges.createRecordsForUpdate({
      tableName: this.models.NaturalPeople.tableName,
      recordId: oldRecord['id'],
      oldRecord: oldRecord,
      newRecordUpdates: preparedRecordForUpdate
    }).map(prepareRecordForDbInsert);

    await this.models.NaturalPeople.query(transaction)
      .findById(id)
      .patch(preparedRecordForUpdate);

    await this.models.HistoryRecordChanges.query(transaction).insert(
      preparedHistoryRecords
    );

    return prepareDbRecordForReturn(
      await this.models.NaturalPeople.query(transaction).findById(id)
    );
  }

  async getLatestVersionsOfAllRecordsForQuickSearch({ transaction }) {
    const { prepareDbRecordForReturn } = this.dbUtils.record.preparator;
    const records = await this.models.NaturalPeople.query(transaction).select(
      'id',
      'first_name',
      'last_name',
      'mother_name'
    );

    return records.map(record => {
      return prepareDbRecordForReturn(record);
    });
  }

  async getLatestVersionsOfAllRecords({ transaction }) {
    const { prepareDbRecordForReturn } = this.dbUtils.record.preparator;
    const { RecordFlattener } = this.helpers;
    const records = await this.models.NaturalPeople.query(transaction)
      .select(
        'id',
        'first_name',
        'last_name',
        'mother_name',
        'birth_date',
        'created_at',
        'updated_at'
      )
      .eager('permanent_address.city.country');

    return records.map(record => {
      const flattenedPermanentAddress = RecordFlattener.createInstance().flatten(
        {
          type: RecordFlattener.RECORD_TYPE.ADDRESS,
          record: record.permanent_address
        }
      );

      return prepareDbRecordForReturn({
        ...record,
        permanent_address: prepareDbRecordForReturn(flattenedPermanentAddress)
      });
    });
  }

  async getAllVersionsOfSingleRecord({ id, transaction }) {
    const { prepareDbRecordForReturn } = this.dbUtils.record.preparator;
    const record = await this.models.NaturalPeople.query(transaction).findById(
      id
    );
    const changes = await this.models.HistoryRecordChanges.query(
      transaction
    ).where({
      table: this.models.NaturalPeople.tableName,
      record_id: id
    });

    return HistoryRecordChanges.getAllVersionsOfRecord({
      record,
      changes
    }).map(prepareDbRecordForReturn);
  }

  async getAllVersionsOfAllRecords({ transaction }) {
    const { prepareDbRecordForReturn } = this.dbUtils.record.preparator;
    const records = await this.models.NaturalPeople.query(transaction);

    const changes = await this.models.HistoryRecordChanges.query(
      transaction
    ).where({
      table: this.models.NaturalPeople.tableName
    });

    return HistoryRecordChanges.getAllVersionsOfRecords({
      records,
      changes
    }).map(prepareDbRecordForReturn);
  }
}

module.exports = NaturalPeople;
