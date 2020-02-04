const DataNormalizer = require('./DataNormalizer');
const RecordPreparator = require('./RecordPreparator');
const RecordFlattener = require('./RecordFlattener');

module.exports = {
  data: {
    normalizer: new DataNormalizer()
  },
  record: {
    preparator: new RecordPreparator(),
    flattener: new RecordFlattener()
  }
};
