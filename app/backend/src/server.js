global.globalRequire = path => {
  return require(`${__dirname}/${path}`);
};

const loaders = require('./loaders');
let server = null;

const start = async (callback = () => {}) => {
  try {
    const { app, config } = await loaders.start();

    server = app.listen(config.get('host.port'), error => {
      if (error) {
        return process.exit(1);
      }

      return callback();
    });
  } catch (error) {
    console.log(error);
    return process.exit(1);
  }
};

const stop = async (callback = () => {}) => {
  try {
    await loaders.stop();
    await server.close();
    callback();
  } catch (error) {
    console.log(error);
    return process.exit(1);
  }
};

module.exports = {
  start: start,
  stop: stop
};
