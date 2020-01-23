const { expect } = require('chai');
//const verror = require('verror');
const sinon = require('sinon');
const services = require('../../../../../src/services');

describe('services.get("database").execute("naturalPeople", "create")', () => {
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

  it('creates a new natural person', async () => {
    // Given
    const controller = 'naturalPeople';
    const method = 'create';
    const args = {
      firstName: 'Kyle',
      lastName: 'Lin',
      motherName: 'Amanda Lin',
      birthDate: new Date('1990-07-03T00:00:00.000Z'),
      identifierDocumentId: 1,
      permanentAddressId: 1
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
        firstName: 'Kyle',
        lastName: 'Lin',
        motherName: 'Amanda Lin',
        birthDate: new Date('1990-07-03T00:00:00.000Z'),
        identifierDocumentId: 1,
        permanentAddressId: 1,
        createdAt: '2019-08-27T11:11:11.000Z',
        updatedAt: '2019-08-27T11:11:11.000Z',
        id: 4
      }
    });
  });
});
