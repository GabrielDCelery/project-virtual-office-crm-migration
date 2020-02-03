class Redis {
  constructor() {
    this.client = null;
    this.flushRedis = this.flushRedis.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.execute = this.execute.bind(this);
  }

  async _startRedisClient({ config, nodeModules }) {
    const { redis, promisify } = nodeModules;

    this.client = redis.createClient({
      host: config.get('redis.host'),
      port: config.get('redis.port')
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
    const result = this.client.setAsync(key, JSON.stringify(value));

    if (result !== 'OK') {
      throw new Error(`Failed to save Redis key ${key}`);
    }

    return null;
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

  async start({ EServiceMethod, config, nodeModules, utils }) {
    if (this.initialized) {
      throw new Error('Tried to initialize the redis connection twice!');
    }

    const {
      SERVICE_METHOD_SET_REDIS_VALUE,
      SERVICE_METHOD_GET_REDIS_VALUE
    } = EServiceMethod;

    this.methodExecutor = utils.MethodExecutor.createInstance()
      .register({
        path: SERVICE_METHOD_SET_REDIS_VALUE,
        method: async ({ key, value }) => {
          return await this._setAsync(key, value);
        }
      })
      .register({
        path: SERVICE_METHOD_GET_REDIS_VALUE,
        method: async ({ key }) => {
          return await this._getAsync(key);
        }
      });

    await this._startRedisClient({ config, nodeModules });

    this.initialized = true;
  }

  async stop() {
    await this._stopRedisClient();
    this.initialized = false;
  }

  async execute({ method, parameters }) {
    return await this.methodExecutor.execute({
      method,
      parameters
    });
  }
}

module.exports = new Redis();
