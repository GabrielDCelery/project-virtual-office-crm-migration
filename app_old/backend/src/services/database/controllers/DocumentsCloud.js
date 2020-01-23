class DocumentsCloud {
  constructor({ models, nodeModules, recordPreparator }) {
    this.models = models;
    this.nodeModules = nodeModules;
    this.recordPreparator = recordPreparator;
    this.create = this.create.bind(this);
    this.createBulk = this.createBulk.bind(this);
  }

  async create({
    documentId,
    extension,
    mimetype,
    size,
    storageDetails,
    transaction
  }) {
    const { uuidv4 } = this.nodeModules;
    const { prepareRecordForDbInsert } = this.recordPreparator;

    return await this.models.DocumentsCloud.query(transaction).insert(
      prepareRecordForDbInsert({
        id: uuidv4(),
        documentId,
        storageDetails,
        size,
        mimetype,
        extension
      })
    );
  }

  async createBulk({ inserts, transaction }) {
    const { uuidv4 } = this.nodeModules;
    const { prepareRecordForDbInsert } = this.recordPreparator;

    return await this.models.DocumentsCloud.query(transaction).insert(
      inserts.map(
        ({ documentId, extension, mimetype, size, storageDetails }) => {
          return prepareRecordForDbInsert({
            id: uuidv4(),
            documentId,
            storageDetails,
            size,
            mimetype,
            extension
          });
        }
      )
    );
  }
}

module.exports = DocumentsCloud;
