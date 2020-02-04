class Logger {
  constructor() {
    this.initialized = false;
    this.methodExecutor = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  async start({ config }) {
    if (this.initialized) {
      throw new Error('Tried to initialize logger twice!');
    }
    this.initialized = true;

    return this;
  }

  async stop() {
    this.initialized = false;
  }

  async handleError({ error }) {
    console.error(error);
  }
}

module.exports = new Logger();
