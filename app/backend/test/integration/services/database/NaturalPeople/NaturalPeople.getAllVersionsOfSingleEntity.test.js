const { expect } = require('chai');
//const verror = require("verror");
const services = require('../../../../../src/services');

describe('services.get("database").execute("naturalPeople", "getAllVersionsOfSingleRecord")', () => {
  beforeEach(async () => {
    await services
      .get('database')
      .getKnex()
      .seed.run();
  });

  afterEach(async () => {});

  it('gets all versions of a natural person', async () => {
    // Given
    const controller = 'naturalPeople';
    const method = 'getAllVersionsOfSingleRecord';
    const args = {
      id: 2
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
      payload: [
        {
          id: 2,
          firstName: 'Thomas',
          lastName: 'Jefferson',
          motherName: 'Jane Randolph Jefferson',
          birthDate: new Date('1743-04-13T00:00:00.000Z'),
          identifierDocumentId: 1,
          permanentAddressId: 3,
          createdAt: new Date('2018-06-03T11:11:11.000Z'),
          updatedAt: new Date('2019-08-01T11:11:11.000Z'),
          version: 1
        },
        {
          id: 2,
          firstName: 'Thomas',
          lastName: 'Jefferson',
          motherName: 'Jane Randolph Jefferson',
          birthDate: '1743-04-13T00:00:00.000Z',
          identifierDocumentId: 1,
          permanentAddressId: 4,
          createdAt: new Date('2018-06-03T11:11:11.000Z'),
          updatedAt: new Date('2018-06-03T11:11:11.000Z'),
          version: 0
        }
      ]
    });
  });
});
