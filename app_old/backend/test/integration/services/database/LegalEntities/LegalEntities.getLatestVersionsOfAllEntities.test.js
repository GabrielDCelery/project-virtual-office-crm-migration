const { expect } = require('chai');
//const verror = require("verror");
const services = require('../../../../../src/services');

describe('services.get("database").execute("legalEntities", "getLatestVersionsOfAllRecords")', () => {
  beforeEach(async () => {
    await services
      .get('database')
      .getKnex()
      .seed.run();
  });

  afterEach(async () => {});

  it('gets latest versions of legal entities', async () => {
    // Given
    const controller = 'legalEntities';
    const method = 'getLatestVersionsOfAllRecords';

    // When
    const result = await services.get('database').execute(controller, method);

    // Then
    expect(result).to.deep.equal({
      success: true,
      service: 'database',
      errors: [],
      payload: [
        {
          id: 1,
          shortName: 'Bacz Invest',
          longName: 'Bacz Invest Elektro Technikai',
          type: 'limited liability company',
          registrationId: '03-01-131101',
          taxId: '13781174-1-42',
          permanentAddressId: 1,
          createdAt: new Date('2019-08-01 11:11:11'),
          updatedAt: new Date('2019-08-01 11:11:11')
        },
        {
          id: 2,
          shortName: 'Chrono-Line',
          longName: 'Chrono-Line',
          type: 'limited liability company',
          registrationId: '02-03-529212',
          taxId: '31580371-1-42',
          permanentAddressId: 1,
          createdAt: new Date('2018-08-03 11:11:11'),
          updatedAt: new Date('2019-08-09 11:11:11')
        },
        {
          id: 3,
          shortName: 'Zeller & Zeller',
          longName: 'Zeller & Zeller',
          type: 'limited liability company',
          registrationId: '01-01-111111',
          taxId: '11111111-1-11',
          permanentAddressId: 1,
          createdAt: new Date('2018-08-03T11:11:11.000Z'),
          updatedAt: new Date('2019-08-09T11:11:11.000Z')
        }
      ]
    });
  });
});
