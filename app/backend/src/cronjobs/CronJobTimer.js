class CronJobTimer {
  constructor({ config, nodeModules, cronMethod }) {
    this.config = config;
    this.nodeModules = nodeModules;
    this.cronMethod = cronMethod;
    this._init();
  }

  _init() {
    const { cron } = this.nodeModules;
    const { CronJob } = cron;
    this.running = false;
    this.job = new CronJob(this.config.timer, () => {
      this._runCronMethod();
    });
  }

  start() {
    this.job.start();

    return this;
  }

  stop() {
    this.job.stop();

    return this;
  }

  async _cronMethodRunAgainWrapper() {
    const result = await this.cronMethod();
    const { success, errors, payload, bRunAgain } = result;

    if (!bRunAgain) {
      return null;
    }

    await CronJobTimer.sleep(5000);

    return this._cronMethodRunAgainWrapper();
  }

  async _runCronMethod() {
    if (this.running === true) {
      return null;
    }

    this.running = true;

    await this._cronMethodRunAgainWrapper();

    this.running = false;
  }

  fireImmediately() {
    this._runCronMethod();
  }

  static sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

module.exports = CronJobTimer;
