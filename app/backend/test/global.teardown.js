const server = require('../src/server');

after(async () => {
  await server.stop();
});
