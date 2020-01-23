const { expect } = require('chai');
//const verror = require('verror');
const sinon = require('sinon');
const services = require('../../../../../src/services');
const REGEXP_JWT = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/;

describe('services.get("authentication").execute("jwt", "sign")', () => {
  let clock = null;
  beforeEach(async () => {
    clock = sinon.useFakeTimers(new Date('2019-08-27T11:11:11.000Z').getTime());
  });

  afterEach(async () => {
    clock.restore();
  });

  it('creates a signed jwt token', async () => {
    // Given
    const controller = 'jwt';
    const method = 'sign';
    const args = {
      email: 'foo@bar.com'
    };

    // When
    const result = await services
      .get('authentication')
      .execute(controller, method, args);

    // Then
    const { success, service, errors, payload } = result;

    expect(success).to.equal(true);
    expect(service).to.equal('authentication');
    expect(errors).to.deep.equal([]);
    expect(new RegExp(REGEXP_JWT).test(payload)).to.equal(true);
  });
});
