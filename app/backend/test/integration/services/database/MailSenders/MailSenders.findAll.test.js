const { expect } = require('chai');
//const verror = require('verror');
const sinon = require('sinon');
const services = require('../../../../../src/services');

describe('services.get("database").execute("mailSenders", "findAll")', () => {
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

  it('returns all the mail senders in a flattened structure', async () => {
    // Given
    const controller = 'mailSenders';
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
          postcode: '1033',
          cityName: 'Budapest',
          countryName: 'Hungary',
          countryShortName: 'HU',
          longStreet: 'Miklós u. 13. VIII/42.',
          senderName: 'John Doe'
        },
        {
          id: 2,
          postcode: '1033',
          cityName: 'Budapest',
          countryName: 'Hungary',
          countryShortName: 'HU',
          longStreet: 'Miklós u. 13. VIII/42.',
          senderName: 'Uzsoki Utcai Kórház'
        },
        {
          id: 3,
          postcode: '1033',
          cityName: 'Budapest',
          countryName: 'Hungary',
          countryShortName: 'HU',
          longStreet: 'Kiscelli utca 45.',
          senderName: 'NAV'
        },
        {
          id: 4,
          postcode: '8000',
          cityName: 'Székesfehérvár',
          countryName: 'Hungary',
          countryShortName: 'HU',
          longStreet: 'Melencei u. 35-37.',
          senderName: 'Hajdú-Bihar Megyei Kormányhivatal'
        },
        {
          id: 5,
          postcode: '3527',
          cityName: 'Miskolc',
          countryName: 'Hungary',
          countryShortName: 'HU',
          longStreet: 'József Attila u. 56.',
          senderName: 'NAV'
        },
        {
          id: 6,
          postcode: '1054',
          cityName: 'Budapest',
          countryName: 'Hungary',
          countryShortName: 'HU',
          longStreet: 'Báthory utca 6-4. 3. emelet 12.',
          senderName: 'Gálos János'
        },
        {
          id: 7,
          postcode: '8000',
          cityName: 'Székesfehérvár',
          countryName: 'Hungary',
          countryShortName: 'HU',
          longStreet: 'Melencei u. 35-37.',
          senderName: 'Bacz Invest'
        }
      ]
    });
  });
});
