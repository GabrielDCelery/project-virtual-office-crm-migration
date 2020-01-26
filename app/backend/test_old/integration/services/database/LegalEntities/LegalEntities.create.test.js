const { expect } = require('chai');
//const verror = require('verror');
const sinon = require('sinon');
const services = require('../../../../../src/services');

describe('services.get("database").execute("legalEntities", "create")', () => {
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

  it('creates a new legal entity', async () => {
    // Given
    const controller = 'legalEntities';
    const method = 'create';
    const args = {
      shortName: 'Donim-Plussz',
      longName: 'Donim-Plussz Hungary',
      type: 'limited liability company',
      registrationId: '01-01-129342',
      taxId: '21583385-1-41',
      permanentAddressId: 2
    };

    // When
    const result = await services
      .get('database')
      .execute(controller, method, args);

    // Then
    expect(result).to.deep.equal({
      success: true,
      service: 'database',
      errors: [],
      payload: {
        id: 4,
        shortName: 'Donim-Plussz',
        longName: 'Donim-Plussz Hungary',
        type: 'limited liability company',
        registrationId: '01-01-129342',
        taxId: '21583385-1-41',
        permanentAddressId: 2,
        createdAt: '2019-08-27T11:11:11.000Z',
        updatedAt: '2019-08-27T11:11:11.000Z'
      }
    });
  });
});
