const server = require('../src/server');

before(async () => {
  await server.start();
});
