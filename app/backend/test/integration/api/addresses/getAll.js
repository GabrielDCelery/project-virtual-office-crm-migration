const { expect } = require('chai');
const axios = require('axios');

module.exports = () => {
  describe('/getAll', () => {
    beforeEach(async () => {});

    afterEach(async () => {});

    it('returns a list of addresses', async () => {
      // Given
      const { ENV_BACKEND_APP_PORT } = process.env;
      const endpoint = `http://localhost:${ENV_BACKEND_APP_PORT}/api/addresses/getAll`;

      // When
      const result = await axios.get(endpoint);
      const { status, data } = result;

      // Then
      expect(status).to.equal(200);
      expect(data).to.deep.equal([
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
      ]);
    });
  });
};
