const { expect } = require('chai');
const axios = require('axios');

module.exports = () => {
  describe('/filter', () => {
    beforeEach(async () => {});

    afterEach(async () => {});

    it('returns a filtered list of addresses', async () => {
      // Given
      const { ENV_BACKEND_APP_PORT } = process.env;
      const endpoint = `http://localhost:${ENV_BACKEND_APP_PORT}/api/addresses/filter`;
      const parameters = {
        filterTerm: 'mi',
        limit: 5
      };

      // When
      const result = await axios.post(endpoint, parameters);
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
          id: 4,
          postcode: '3527',
          cityName: 'Miskolc',
          countryName: 'Hungary',
          countryShortName: 'HU',
          longStreet: 'József Attila u. 56.'
        }
      ]);
    });
  });
};
