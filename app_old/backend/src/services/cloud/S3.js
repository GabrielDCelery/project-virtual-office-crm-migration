class S3 {
  constructor({ config, constants, nodeModules }) {
    this.config = config;
    this.constants = constants;
    this.nodeModules = nodeModules;
  }

  _initConnection() {
    this.connection = new this.nodeModules.AWS.S3({
      endpoint: this.config.endpoint,
      accessKeyId: this.config.accessKeyId,
      secretAccessKey: this.config.accessSecretKey,
      s3ForcePathStyle: true
    });
  }

  async _pingService() {
    return await this._listBuckets();
  }

  async initialize() {
    this._initConnection();
    await this._pingService();

    return this;
  }

  _listBuckets() {
    return new Promise((accept, reject) => {
      this.connection.listBuckets({}, (error, data) => {
        if (error) {
          return reject(error);
        }

        return accept(data);
      });
    });
  }

  _uploadFileToBucket({ bucket, file, fileName }) {
    return new Promise((accept, reject) => {
      this.connection.upload(
        { Bucket: bucket, Key: fileName, Body: file },
        (error, data) => {
          if (error) {
            return reject(error);
          }

          return accept(data);
        }
      );
    });
  }

  async uploadFileToMailBucket({ file, fileName }) {
    return await this._uploadFileToBucket({ bucket: 'mail', file, fileName });
  }

  async uploadFileToBucket({ bucket, file, fileName }) {
    return await this._uploadFileToBucket({ bucket, file, fileName });
  }
}

module.exports = S3;
