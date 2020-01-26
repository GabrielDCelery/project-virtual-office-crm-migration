const { expect } = require('chai');
//const verror = require('verror');
const sinon = require('sinon');
const services = require('../../../../../src/services');

describe('services.get("database").execute("mailSenderNames", "findAll")', () => {
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

  it('returns all the mail sender names', async () => {
    // Given
    const controller = 'mailSenderNames';
    const method = 'findAll';

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
          name: 'John Doe'
        },
        {
          id: 2,
          name: 'Uzsoki Utcai Kórház'
        },
        {
          id: 3,
          name: 'Nemzeti Sportközpontok'
        },
        {
          id: 4,
          name: 'NAV'
        },
        {
          id: 5,
          name: 'Lux Hungária Kft.'
        },
        {
          id: 6,
          name: 'IT Services'
        },
        {
          id: 7,
          name: 'UniCredit Bank'
        },
        {
          id: 8,
          name: 'Magyar Posta'
        },
        {
          id: 9,
          name: 'Hajdú-Bihar Megyei Kormányhivatal'
        },
        {
          id: 10,
          name: 'Debreceni Gyógyfürdő Kft.'
        },
        {
          id: 11,
          name: 'Gálos János'
        },
        {
          id: 12,
          name: 'Bacz Invest'
        }
      ]
    });
  });
});
