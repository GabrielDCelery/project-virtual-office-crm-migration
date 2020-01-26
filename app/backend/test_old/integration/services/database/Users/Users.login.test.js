const { expect } = require('chai');
//const verror = require('verror');
const services = require('../../../../../src/services');

describe('services.get("database").execute("users", "login")', () => {
  beforeEach(async () => {
    await services
      .get('database')
      .getKnex()
      .seed.run();
  });

  afterEach(async () => {});

  it('authenticates an existing user using email and password', async () => {
    // Given
    const controller = 'users';
    const method = 'login';
    const args = {
      email: 'test@test.com',
      password: 'password'
    };

    // When
    const result = await services
      .get('database')
      .execute(controller, method, args);

    // Then
    expect(result).to.deep.equal({
      success: true,
      errors: [],
      service: 'database',
      payload: {
        id: 1,
        email: 'test@test.com',
        rules: ['*']
      }
    });
  });

  it('returns an error if it could not find the account', async () => {
    // Given
    const controller = 'users';
    const method = 'login';
    const args = {
      email: 'doesnotexist@test.com',
      password: 'password'
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
          jse_shortmsg:
            'The email and password combination you entered is invalid!',
          jse_info: {
            email: 'doesnotexist@test.com',
            password: 'password'
          },
          message: 'The email and password combination you entered is invalid!'
        }
      ],
      payload: null
    });
  });

  it('returns an error if the password is invalid', async () => {
    // Given
    const controller = 'users';
    const method = 'login';
    const args = {
      email: 'test@test.com',
      password: 'somebspassword'
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
          jse_shortmsg:
            'The email and password combination you entered is invalid!',
          jse_info: {
            email: 'test@test.com',
            password: 'somebspassword'
          },
          message: 'The email and password combination you entered is invalid!'
        }
      ],
      payload: null
    });
  });

  it('returns an error if the account is inactive', async () => {
    // Given
    const controller = 'users';
    const method = 'login';
    const args = {
      email: 'test2@test.com',
      password: 'password'
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
          jse_shortmsg: 'This account is inactive!',
          jse_info: {
            email: 'test2@test.com',
            password: 'password'
          },
          message: 'This account is inactive!'
        }
      ],
      payload: null
    });
  });

  it('returns an error if the account is suspended ', async () => {
    // Given
    const controller = 'users';
    const method = 'login';
    const args = {
      email: 'test3@test.com',
      password: 'password'
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
          jse_shortmsg: 'This account is suspended!',
          jse_info: {
            email: 'test3@test.com',
            password: 'password'
          },
          message: 'This account is suspended!'
        }
      ],
      payload: null
    });
  });
});
