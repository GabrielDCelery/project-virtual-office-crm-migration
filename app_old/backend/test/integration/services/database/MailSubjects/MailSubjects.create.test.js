const { expect } = require('chai');
//const verror = require('verror');
const sinon = require('sinon');
const services = require('../../../../../src/services');

describe('services.get("database").execute("mailSubjects", "create")', () => {
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

  it('creates a new mail subject', async () => {
    // Given
    const controller = 'mailSubjects';
    const method = 'create';
    const args = {
      longSubject: 'Értesítés'
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
        longSubject: 'Értesítés',
        id: 3
      }
    });
  });

  it('returns a mail sender subject if it already exists', async () => {
    // Given
    const controller = 'mailSubjects';
    const method = 'create';
    const args = {
      longSubject: 'Felhívás'
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
        longSubject: 'Felhívás',
        id: 2
      }
    });
  });
});
