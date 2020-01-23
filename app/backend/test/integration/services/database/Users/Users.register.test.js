const { expect } = require('chai');
const sinon = require('sinon');
//const verror = require("verror");
const services = require('../../../../../src/services');

describe('services.get("database").execute("users", "register")', () => {
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

  it('registers a new inactive user', async () => {
    // Given
    const controller = 'users';
    const method = 'register';
    const args = {
      email: 'test4@test.com',
      password: 'mypassword'
    };

    // When
    const result = await services
      .get('database')
      .execute(controller, method, args);

    const {
      success,
      service,
      errors,
      payload: { id, email, status }
    } = result;

    // Then
    expect(success).to.equal(true);
    expect(service).to.equal('database');
    expect(errors).to.deep.equal([]);
    expect(id).to.equal(4);
    expect(email).to.equal('test4@test.com');
    expect(status).to.equal('inactive');
  });

  it('returns an error if user is already registered', async () => {
    // Given
    const controller = 'users';
    const method = 'register';
    const args = {
      email: 'test@test.com',
      password: 'mypassword'
    };

    // When
    const result = await services
      .get('database')
      .execute(controller, method, args);

    // Then
    expect(JSON.parse(JSON.stringify(result))).to.deep.equal({
      success: false,
      service: 'database',
      errors: [
        {
          name: 'DatabaseControllerError',
          jse_shortmsg: 'Email already registered!',
          jse_info: {
            email: 'test@test.com',
            password: 'mypassword'
          },
          message: 'Email already registered!'
        }
      ],
      payload: null
    });
  });
});
