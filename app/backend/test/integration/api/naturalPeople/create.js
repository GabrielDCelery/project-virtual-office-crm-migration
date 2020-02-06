const { expect } = require('chai');
const axios = require('axios');
const sinon = require('sinon');
const services = globalRequire('services');
const { SERVICE_NAME_DATABASE } = globalRequire('common/enums');

module.exports = () => {
  describe('/create', () => {
    let clock = null;
    beforeEach(async () => {
      await services
        .get(SERVICE_NAME_DATABASE)
        .getKnex()
        .seed.run();
      clock = sinon.useFakeTimers(
        new Date('2019-08-27T11:11:11.000Z').getTime()
      );
    });

    afterEach(async () => {
      clock.restore();
    });

    it('creates a new natural person', async () => {
      // Given
      const { ENV_BACKEND_APP_PORT } = process.env;
      const endpoint = `http://localhost:${ENV_BACKEND_APP_PORT}/api/naturalPeople/create`;
      const parameters = {
        firstName: 'John',
        lastName: 'Doe',
        motherName: 'Jane Doe',
        birthDate: '1979-08-05',
        identifierDocumentType: 'passport',
        identifierDocumentNumber: 'HIJKL',
        permanentAddressId: 2
      };

      // When
      const result = await axios.post(endpoint, parameters);
      const { status, data } = result;

      // Then
      expect(status).to.equal(200);
      expect(data).to.deep.equal({
        id: 4,
        firstName: 'John',
        lastName: 'Doe',
        motherName: 'Jane Doe',
        birthDate: '1979-08-05T00:00:00.000Z',
        identifierDocumentType: 'passport',
        identifierDocumentNumber: 'HIJKL',
        permanentAddressId: 2,
        createdAt: '2019-08-27T11:11:11.000Z',
        updatedAt: '2019-08-27T11:11:11.000Z'
      });
    });
  });
};
