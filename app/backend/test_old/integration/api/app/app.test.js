const { expect } = require('chai');
const axios = require('axios');

describe('/health', () => {
  beforeEach(async () => {});

  it('confirms if the service is running', async () => {
    // Given
    const { BACKEND_APP_PORT } = process.env;
    const endpoint = `http://localhost:${BACKEND_APP_PORT}/health`;

    // When
    const result = await axios.get(endpoint);
    const { status, data } = result;

    // Then
    expect(status).to.equal(200);
    expect(data).to.equal('OK');
  });
});
