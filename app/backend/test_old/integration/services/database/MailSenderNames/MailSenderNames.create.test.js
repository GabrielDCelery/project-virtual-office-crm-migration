const { expect } = require('chai');
//const verror = require('verror');
const sinon = require('sinon');
const services = require('../../../../../src/services');

describe('services.get("database").execute("mailSenderNames", "create")', () => {
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

  it('creates a new mail sender name', async () => {
    // Given
    const controller = 'mailSenderNames';
    const method = 'create';
    const args = {
      name: 'Állami Iroda'
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
        name: 'Állami Iroda',
        id: 13
      }
    });
  });

  it('returns a mail sender name if it already exists', async () => {
    // Given
    const controller = 'mailSenderNames';
    const method = 'create';
    const args = {
      name: 'IT Services'
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
        name: 'IT Services',
        id: 6
      }
    });
  });
});
