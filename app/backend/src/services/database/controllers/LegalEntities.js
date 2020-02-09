const HistoryRecordChanges = require('./HistoryRecordChanges');

class LegalEntities {
  constructor({ models, dbUtils }) {
    this.dbUtils = dbUtils;
    this.models = models;
  }

  async getTypes() {
    return Object.values(this.models.LegalEntities.TYPES);
  }

  async create({
    shortName,
    longName,
    type,
    registrationId,
    taxId,
    permanentAddressId,
    transaction
  }) {
    const {
      prepareRecordForDbInsert,
      prepareDbRecordForReturn
    } = this.recordPreparator;

    return prepareDbRecordForReturn(
      await this.models.LegalEntities.query(transaction).insert(
        prepareRecordForDbInsert({
          shortName,
          longName,
          type,
          registrationId,
          taxId,
          permanentAddressId
        })
      )
    );
  }

  async update({ id, transaction, ...inputs }) {
    const {
      prepareDbRecordForReturn,
      prepareRecordForUpdate,
      prepareRecordForDbInsert
    } = this.recordPreparator;

    const oldRecord = await this.models.LegalEntities.query(
      transaction
    ).findById(id);
    const preparedRecordForUpdate = prepareRecordForUpdate({ ...inputs });
    const preparedHistoryRecords = HistoryRecordChanges.createRecordsForUpdate({
      tableName: this.models.LegalEntities.tableName,
      recordId: oldRecord['id'],
      oldRecord: oldRecord,
      newRecordUpdates: preparedRecordForUpdate
    }).map(prepareRecordForDbInsert);

    await this.models.LegalEntities.query(transaction)
      .findById(id)
      .patch(preparedRecordForUpdate);

    await this.models.HistoryRecordChanges.query(transaction).insert(
      preparedHistoryRecords
    );

    return prepareDbRecordForReturn(
      await this.models.LegalEntities.query(transaction).findById(id)
    );
  }

  async getLatestVersionsOfAllRecords({ transaction }) {
    const { prepareDbRecordForReturn } = this.recordPreparator;
    const records = await this.models.LegalEntities.query(transaction);

    return records.map(prepareDbRecordForReturn);
  }

  async getAllVersionsOfSingleRecord({ id, transaction }) {
    const { prepareDbRecordForReturn } = this.recordPreparator;
    const record = await this.models.LegalEntities.query(transaction).findById(
      id
    );
    const changes = await this.models.HistoryRecordChanges.query(
      transaction
    ).where({
      table: this.models.LegalEntities.tableName,
      record_id: id
    });

    return HistoryRecordChanges.getAllVersionsOfRecord({
      record,
      changes
    }).map(prepareDbRecordForReturn);
  }

  async getAllVersionsOfAllRecords({ transaction }) {
    const { prepareDbRecordForReturn } = this.dbUtils.record.preparator;
    const records = await this.models.LegalEntities.query(transaction);
    const changes = await this.models.HistoryRecordChanges.query(
      transaction
    ).where({
      table: this.models.LegalEntities.tableName
    });

    return HistoryRecordChanges.getAllVersionsOfRecords({
      records,
      changes
    }).map(record => {
      return prepareDbRecordForReturn(record);
    });
  }

  async getAllVersionsOfAllRecordsForQuickSearch({ transaction }) {
    const { prepareDbRecordForReturn } = this.dbUtils.record.preparator;
    const records = await this.models.LegalEntities.query(transaction).select(
      'id',
      'long_name',
      'type',
      'created_at',
      'updated_at'
    );
    const changes = await this.models.HistoryRecordChanges.query(
      transaction
    ).where({
      table: this.models.LegalEntities.tableName,
      column: 'long_name'
    });

    return HistoryRecordChanges.getAllVersionsOfRecords({
      records,
      changes
    }).map(record => {
      return prepareDbRecordForReturn(record);
    });
  }
}

module.exports = LegalEntities;
