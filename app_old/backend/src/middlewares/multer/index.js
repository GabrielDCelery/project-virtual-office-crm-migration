class MulterMiddleware {
  constructor() {
    this.initialized = false;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.createSync = this.createSync.bind(this);
  }

  async start({ nodeModules }) {
    if (this.initialized) {
      throw new Error('Tried to initialize multer middleware twice!');
    }

    const { multer } = nodeModules;
    const storage = multer.memoryStorage();

    this.executables = {
      single: fieldName => {
        return multer({ storage }).single(fieldName);
      }
    };
    this.initialized = true;

    return this;
  }

  async stop() {
    this.initialized = false;
  }

  createSync(...args) {
    const [executable, ...rest] = args;

    return Reflect.apply(this.executables[executable], this.executables, rest);
  }
}

module.exports = new MulterMiddleware();
