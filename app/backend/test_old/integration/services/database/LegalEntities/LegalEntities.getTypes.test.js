const { expect } = require('chai');
//const verror = require("verror");
const sinon = require('sinon');
const services = require('../../../../../src/services');

describe('services.get("database").execute("legalEntities", "getTypes")', () => {
  beforeEach(async () => {
    await services
      .get('database')
      .getKnex()
      .seed.run();
  });

  afterEach(async () => {});

  it('gets legal entity types', async () => {
    // Given
    const controller = 'legalEntities';
    const method = 'getTypes';

    // When
    const result = await services.get('database').execute(controller, method);

    // Then
    expect(result).to.deep.equal({
      success: true,
      service: 'database',
      errors: [],
      payload: [
        'limited liability company',
        'unlimited partnership',
        'sole proprietorships'
      ]
    });
  });
});
