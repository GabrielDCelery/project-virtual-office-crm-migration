const { expect } = require('chai');
const axios = require('axios');

module.exports = () => {
  describe('/filter', () => {
    beforeEach(async () => {});

    afterEach(async () => {});

    it('returns a filtered list of natural people', async () => {
      // Given
      const { ENV_BACKEND_APP_PORT } = process.env;
      const endpoint = `http://localhost:${ENV_BACKEND_APP_PORT}/api/naturalPeople/filter`;
      const parameters = {
        filterTerm: 'ga',
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
          firstName: 'Gabriel',
          lastName: 'Celery',
          motherName: 'Ildiko Zeller'
        }
      ]);
    });
  });
};
