const { expect } = require('chai');
//const verror = require("verror");
const services = require('../../../../../src/services');

describe('services.get("database").execute("legalEntities", "getAllVersionsOfSingleRecord")', () => {
  beforeEach(async () => {
    await services
      .get('database')
      .getKnex()
      .seed.run();
  });

  afterEach(async () => {});

  it('gets all versions of a legal entity', async () => {
    // Given
    const controller = 'legalEntities';
    const method = 'getAllVersionsOfSingleRecord';
    const args = { id: 2 };

    // When
    const result = await services
      .get('database')
      .execute(controller, method, args);

    // Then
    expect(result).to.deep.equal({
      success: true,
      service: 'database',
      errors: [],
      payload: [
        {
          id: 2,
          shortName: 'Chrono-Line',
          longName: 'Chrono-Line',
          type: 'limited liability company',
          registrationId: '02-03-529212',
          taxId: '31580371-1-42',
          permanentAddressId: 1,
          createdAt: new Date('2018-08-03T11:11:11.000Z'),
          updatedAt: new Date('2019-08-09T11:11:11.000Z'),
          version: 2
        },
        {
          id: 2,
          shortName: 'Chrono-Line',
          longName: 'Chrono-Line',
          type: 'limited liability company',
          registrationId: '02-03-529212',
          taxId: '41580371-1-42',
          permanentAddressId: 1,
          createdAt: new Date('2018-08-03T11:11:11.000Z'),
          updatedAt: new Date('2018-09-02T11:11:11.000Z'),
          version: 1
        },
        {
          id: 2,
          shortName: 'Chrono-Trigger',
          longName: 'Chrono-Trigger',
          type: 'limited liability company',
          registrationId: '02-03-529212',
          taxId: '41580371-1-42',
          permanentAddressId: 1,
          createdAt: new Date('2018-08-03T11:11:11.000Z'),
          updatedAt: new Date('2018-08-03T11:11:11.000Z'),
          version: 0
        }
      ]
    });
  });
});
