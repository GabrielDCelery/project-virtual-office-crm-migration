const { expect } = require('chai');
//const verror = require("verror");
const sinon = require('sinon');
const services = require('../../../../../src/services');

describe('services.get("database").execute("legalEntities", "update")', () => {
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
    const controller = 'legalEntities';
    const method = 'update';
    const args = {
      id: 1,
      type: 'unlimited partnership',
      taxId: '24892285-1-42'
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
        id: 1,
        shortName: 'Bacz Invest',
        longName: 'Bacz Invest Elektro Technikai',
        type: 'unlimited partnership',
        registrationId: '03-01-131101',
        taxId: '24892285-1-42',
        permanentAddressId: 1,
        createdAt: new Date('2019-08-01T11:11:11.000Z'),
        updatedAt: new Date('2019-08-27T11:11:11.000Z')
      }
    });
  });
});
