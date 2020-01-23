const CronJobTimer = require('./CronJobTimer');
const cloud = require('./cloud');

class CronJobs {
  constructor() {
    this.services = null;
    this.initialized = false;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.fireImmediately = this.fireImmediately.bind(this);
  }

  initialize({ services, nodeModules }) {
    this.instances = {
      cloud: {
        copyTemporaryMailsToS3: new CronJobTimer({
          config: {
            timer: '0 0 0 * * *'
          },
          nodeModules,
          cronMethod: cloud.copyTemporaryMailsToS3Wrapper({
            services
          })
        }).start()
      }
    };
  }

  async start({ services, nodeModules }) {
    if (this.initialized) {
      throw new Error('Tried to initialize cronjob twice!');
    }
    this.initialize({ services, nodeModules });
    this.initialized = true;

    return this;
  }

  async stop() {
    Object.keys(this.instances).forEach(instance => {
      Object.keys(this.instances[instance]).forEach(method => {
        return this.instances[instance][method].stop();
      });
    });
    this.initialized = false;
  }

  fireImmediately(instanceName, methodName) {
    return this.instances[instanceName][methodName]['fireImmediately']();
  }
}

module.exports = new CronJobs();
