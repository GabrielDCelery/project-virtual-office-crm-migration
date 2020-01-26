const { expect } = require('chai');
const axios = require('axios');
const sinon = require('sinon');
const services = require('../../../../src/services');

describe('/api/legalEntities/update', () => {
  let clock = null;
  beforeEach(async () => {
    await services
      .get('database')
      .getKnex()
      .seed.run();
    clock = sinon.useFakeTimers(new Date('2019-08-27T11:11:11.000Z').getTime());
  });

  afterEach(async () => {
    clock.restore();
  });

  it('updates a legal entity', async () => {
    // Given
    const { BACKEND_APP_PORT } = process.env;
    const endpoint = `http://localhost:${BACKEND_APP_PORT}/api/legalEntities/update`;

    // When
    const result = await axios.post(endpoint, {
      id: 2,
      longName: 'Chrono-Line New',
      permanentAddressId: 2
    });
    const { status, data } = result;

    // Then
    expect(status).to.equal(200);
    expect(data).to.deep.equal({
      success: true,
      service: 'database',
      errors: [],
      payload: {
        id: 2,
        shortName: 'Chrono-Line',
        longName: 'Chrono-Line New',
        type: 'limited liability company',
        registrationId: '02-03-529212',
        taxId: '31580371-1-42',
        permanentAddressId: 2,
        createdAt: '2018-08-03T11:11:11.000Z',
        updatedAt: '2019-08-27T11:11:11.000Z'
      }
    });
  });
});
