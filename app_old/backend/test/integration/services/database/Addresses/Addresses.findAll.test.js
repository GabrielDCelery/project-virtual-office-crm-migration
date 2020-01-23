const { expect } = require('chai');
//const verror = require('verror');
const services = require('../../../../../src/services');

describe('services.get("database").execute("addresses", "findAll")', () => {
  beforeEach(async () => {
    await services
      .get('database')
      .getKnex()
      .seed.run();
  });

  afterEach(async () => {});

  it('returns all the addresses in a flat structure', async () => {
    // Given
    const controller = 'addresses';
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
          longStreet: 'Miklós u. 13. VIII/42.'
        },
        {
          id: 2,
          postcode: '1033',
          cityName: 'Budapest',
          countryName: 'Hungary',
          countryShortName: 'HU',
          longStreet: 'Kiscelli utca 45.'
        },
        {
          id: 3,
          postcode: '8000',
          cityName: 'Székesfehérvár',
          countryName: 'Hungary',
          countryShortName: 'HU',
          longStreet: 'Melencei u. 35-37.'
        },
        {
          id: 4,
          postcode: '3527',
          cityName: 'Miskolc',
          countryName: 'Hungary',
          countryShortName: 'HU',
          longStreet: 'József Attila u. 56.'
        },
        {
          id: 5,
          postcode: '1054',
          cityName: 'Budapest',
          countryName: 'Hungary',
          countryShortName: 'HU',
          longStreet: 'Báthory utca 6-4. 3. emelet 12.'
        }
      ]
    });
  });
});
