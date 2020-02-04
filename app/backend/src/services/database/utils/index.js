const RecordPreparator = require('./RecordPreparator');
const RecordFlattener = require('./RecordFlattener');

module.exports = {
  record: {
    preparator: new RecordPreparator(),
    flattener: new RecordFlattener()
  }
};
