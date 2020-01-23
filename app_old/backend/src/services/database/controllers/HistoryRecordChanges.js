const _ = require('lodash');

class HistoryRecordChanges {
  static createRecordsForUpdate({
    tableName,
    recordId,
    oldRecord,
    newRecordUpdates
  }) {
    return Object.keys(newRecordUpdates).map(columnName => {
      return {
        table: tableName,
        column: columnName,
        columnType: HistoryRecordChanges.getTypeOfValue(oldRecord[columnName]),
        recordId,
        oldValue: _.toString(oldRecord[columnName]),
        newValue: _.toString(newRecordUpdates[columnName])
      };
    });
  }

  static getTypeOfValue(value) {
    if (value === parseInt(value, 10)) {
      return 'integer';
    }

    return typeof value;
  }

  static getAllVersionsOfRecord({ record, changes }) {
    const changedAtTimestampsMap = {};

    changes.forEach(change => {
      const changedAtTimestamp = new Date(change['changed_at']).getTime();

      if (!changedAtTimestampsMap[changedAtTimestamp]) {
        changedAtTimestampsMap[changedAtTimestamp] = [];
      }

      changedAtTimestampsMap[changedAtTimestamp].push(change);
    });

    const changedAtTimestamps = Object.keys(changedAtTimestampsMap).reverse();
    const versionedRecords = [
      {
        ...record,
        version: changedAtTimestamps.length
      }
    ];

    let lastVersionedRecord = record;

    changedAtTimestamps.forEach((timestamp, index) => {
      lastVersionedRecord = JSON.parse(JSON.stringify(lastVersionedRecord));
      const changesAtTimestamp = changedAtTimestampsMap[timestamp];

      changesAtTimestamp.forEach(({ column, column_type, old_value }) => {
        lastVersionedRecord[column] = HistoryRecordChanges.getValueOfType({
          value: old_value,
          type: column_type
        });
      });

      versionedRecords.push({
        ...lastVersionedRecord,
        version: changedAtTimestamps.length - 1 - index,
        created_at: new Date(lastVersionedRecord['created_at']),
        updated_at:
          changedAtTimestamps.length - 1 === index
            ? record['created_at']
            : new Date(parseInt(changedAtTimestamps[index + 1], 10))
      });
    });

    return versionedRecords;
  }

  static getAllVersionsOfRecords({ records, changes }) {
    const recordChangesMap = {};

    changes.forEach(change => {
      if (!recordChangesMap[change['record_id']]) {
        recordChangesMap[change['record_id']] = [];
      }

      recordChangesMap[change['record_id']].push(change);
    });

    let final = [];

    records.forEach(record => {
      final = final.concat(
        ...HistoryRecordChanges.getAllVersionsOfRecord({
          record,
          changes: recordChangesMap[record['id']] || []
        })
      );
    });

    return final;
  }

  static getValueOfType({ value, type }) {
    if (type === 'string') {
      return value;
    }

    if (type === 'integer') {
      return parseInt(value, 10);
    }

    return value;
  }
}

module.exports = HistoryRecordChanges;
