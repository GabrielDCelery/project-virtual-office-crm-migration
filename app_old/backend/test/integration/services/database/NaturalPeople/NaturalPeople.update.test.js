const { expect } = require('chai');
//const verror = require("verror");
const sinon = require('sinon');
const services = require('../../../../../src/services');

describe('services.get("database").execute("naturalPeople", "update")', () => {
  let clock = null;

  beforeEach(async () => {
    await services
      .get('database')
      .getKnex()
      .seed.run();
    clock = sinon.useFakeTimers(
      new Date(new Date('2019-08-27T11:11:11.000Z')).getTime()
    );
  });

  afterEach(async () => {
    clock.restore();
  });

  it('updates a natural person', async () => {
    // Given
    const controller = 'naturalPeople';
    const method = 'update';
    const args = {
      id: 2,
      firstName: 'Tooooomas'
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
        id: 2,
        firstName: 'Tooooomas',
        lastName: 'Jefferson',
        motherName: 'Jane Randolph Jefferson',
        birthDate: new Date('1743-04-13T00:00:00.000Z'),
        identifierDocumentId: 1,
        permanentAddressId: 3,
        createdAt: new Date('2018-06-03T11:11:11.000Z'),
        updatedAt: new Date('2019-08-27T11:11:11.000Z')
      }
    });
  });
});
