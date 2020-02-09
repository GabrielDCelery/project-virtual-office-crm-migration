const { expect } = require('chai');
const axios = require('axios');

module.exports = () => {
  describe('/filter', () => {
    beforeEach(async () => {});

    afterEach(async () => {});

    it('returns a filtered list of legal entities', async () => {
      // Given
      const { ENV_BACKEND_APP_PORT } = process.env;
      const endpoint = `http://localhost:${ENV_BACKEND_APP_PORT}/api/legalEntities/filter`;
      const parameters = {
        filterTerm: 'ch',
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
          longName: 'Bacz Invest Elektro Technikai',
          type: 'limited liability company',
          createdAt: '2019-08-01T11:11:11.000Z',
          updatedAt: '2019-08-01T11:11:11.000Z',
          version: 0
        },
        {
          id: 2,
          longName: 'Chrono-Line',
          type: 'limited liability company',
          createdAt: '2018-08-03T11:11:11.000Z',
          updatedAt: '2019-08-09T11:11:11.000Z',
          version: 1
        },
        {
          id: 2,
          longName: 'Chrono-Trigger',
          type: 'limited liability company',
          createdAt: '2018-08-03T11:11:11.000Z',
          updatedAt: '2018-08-03T11:11:11.000Z',
          version: 0
        }
      ]);
    });
  });
};
