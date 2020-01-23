const { promisify } = require('util');
const redis = require('redis');
const config = require('./config');

class Redis {
  constructor() {
    this.client = null;
    this.helpers = null;
    this.flushRedis = this.flushRedis.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.execute = this.execute.bind(this);
  }

  async _startRedisClient({ host, port }) {
    this.client = redis.createClient({
      host,
      port
    });
    this.client.getAsync = promisify(this.client.get).bind(this.client);
    this.client.setAsync = promisify(this.client.set).bind(this.client);
    await this.client.setAsync('health', 'OK');
    const result = await this.client.getAsync('health');

    if (result !== 'OK') {
      throw new Error('Could not initialize redis!');
    }
  }

  async _stopRedisClient() {
    return new Promise((accept, reject) => {
      this.client.quit((error, success) => {
        if (error) {
          return reject(error.message);
        }

        return accept(success);
      });
    });
  }

  async _getAsync(key) {
    const value = await this.client.getAsync(key);

    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  }

  async _setAsync(key, value) {
    return this.client.setAsync(key, JSON.stringify(value));
  }

  _safeStringifyJSON(value) {
    if (typeof value === 'string') {
      return value;
    }

    return JSON.stringify(value);
  }

  async flushRedis() {
    return new Promise((accept, reject) => {
      this.client.flushdb((error, succeeded) => {
        if (error) {
          return reject(error.message);
        }

        return accept(succeeded);
      });
    });
  }

  async start({ environmentVariables, helpers }) {
    if (this.initialized) {
      throw new Error('Tried to initialize the redis connection twice!');
    }

    this.helpers = helpers;

    await this._startRedisClient(config(environmentVariables));

    this.initialized = true;
  }

  async stop() {
    await this._stopRedisClient();
    this.initialized = false;
  }

  async execute(key, methodName, value) {
    try {
      return this.helpers.wrapResult(
        'success',
        await this[`_${methodName}`](key, value)
      );
    } catch (error) {
      return this.helpers.wrapResult('fail', error.message);
    }
  }
}

module.exports = new Redis();
