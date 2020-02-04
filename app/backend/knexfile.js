const Config = require('./src/config');
const config = Config.createSingleton();
config.init(process.env);

module.exports = config.get(['database', config.get('nodeEnv')]);
