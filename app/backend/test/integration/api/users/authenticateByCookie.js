const { expect } = require('chai');
const axios = require('axios');
const sinon = require('sinon');
const services = globalRequire('services');
const { EServiceName } = globalRequire('common/enums');
const { SERVICE_NAME_DATABASE } = EServiceName;

module.exports = () => {
  describe('/authenticateByCookie', () => {
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

    it('successfully authenticates a registered user', async () => {
      // Given
      const { ENV_BACKEND_APP_PORT } = process.env;
      const url = `http://localhost:${ENV_BACKEND_APP_PORT}/api/users/authenticateByCookie`;

      // When
      const result = await axios({
        method: 'post',
        url,
        headers: {
          Cookie:
            'PVOCRM_SESSION_ID=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiZXhwIjoxNTY2OTkwNjcxLCJpYXQiOjE1NjY5MDQyNzF9.n_clqEGLvVfCIfTvxB39dKZru0g78iC8ZgXh2eAbPf8;'
        },
        responseType: 'json'
      });
      const { status, data } = result;

      // Then
      expect(status).to.equal(200);
      expect(data).to.deep.equal({
        email: 'test@test.com',
        rules: ['*']
      });
    });
  });
};
