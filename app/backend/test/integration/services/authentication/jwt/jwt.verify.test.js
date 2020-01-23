const { expect } = require('chai');
//const verror = require('verror');
const sinon = require('sinon');
const services = require('../../../../../src/services');

describe('services.get("authentication").execute("jwt", "verify")', () => {
  it('verifies a signed jwt token', async () => {
    // Setup
    const clock = sinon.useFakeTimers(
      new Date('2019-09-30T11:11:11.000Z').getTime()
    );

    // Given
    const controller = 'jwt';
    const method = 'verify';
    const args =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZvb0BiYXIuY29tIiwiZXhwIjoxNTY5OTI1NzgxLCJpYXQiOjE1NjY5MDQyNzF9.fkuvdFDYLgEqBt96I4NnNGTWPgoXKZlCNc-Ftj1wDUU';

    // When
    const result = await services
      .get('authentication')
      .execute(controller, method, args);

    // Then
    expect(result).to.deep.equal({
      success: true,
      service: 'authentication',
      errors: [],
      payload: {
        email: 'foo@bar.com',
        exp: 1569925781,
        iat: 1566904271
      }
    });

    //Teardown
    clock.restore();
  });

  it('returns an error if the jwt token expired', async () => {
    // Setup
    const clock = sinon.useFakeTimers(
      new Date('2019-10-01T11:11:11.000Z').getTime()
    );

    // Given
    const controller = 'jwt';
    const method = 'verify';
    const args =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZvb0BiYXIuY29tIiwiZXhwIjoxNTY5OTI1NzgxLCJpYXQiOjE1NjY5MDQyNzF9.fkuvdFDYLgEqBt96I4NnNGTWPgoXKZlCNc-Ftj1wDUU';

    // When
    const result = await services
      .get('authentication')
      .execute(controller, method, args);

    // Then
    expect(JSON.parse(JSON.stringify(result))).to.deep.equal({
      success: false,
      service: 'authentication',
      errors: [
        {
          name: 'AuthenticationInstanceError',
          jse_shortmsg: 'Failed to authenticate',
          jse_cause: {
            name: 'TokenExpiredError',
            message: 'jwt expired',
            expiredAt: '2019-10-01T10:29:41.000Z'
          },
          jse_info: {
            jwtToVerify:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZvb0BiYXIuY29tIiwiZXhwIjoxNTY5OTI1NzgxLCJpYXQiOjE1NjY5MDQyNzF9.fkuvdFDYLgEqBt96I4NnNGTWPgoXKZlCNc-Ftj1wDUU'
          },
          message: 'Failed to authenticate: jwt expired'
        }
      ],
      payload: null
    });

    //Teardown
    clock.restore();
  });

  it('returns an error if the jwt token is invalid', async () => {
    // Setup
    const clock = sinon.useFakeTimers(
      new Date('2019-10-01T11:11:11.000Z').getTime()
    );

    // Given
    const controller = 'jwt';
    const method = 'verify';
    const args =
      'ayJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZvb0BiYXIuY29tIiwiZXhwIjoxNTY5OTI1NzgxLCJpYXQiOjE1NjY5MDQyNzF9.fkuvdFDYLgEqBt96I4NnNGTWPgoXKZlCNc-Ftj1wDUU';

    // When
    const result = await services
      .get('authentication')
      .execute(controller, method, args);

    // Then
    expect(JSON.parse(JSON.stringify(result))).to.deep.equal({
      success: false,
      service: 'authentication',
      errors: [
        {
          name: 'AuthenticationInstanceError',
          jse_shortmsg: 'Failed to authenticate',
          jse_cause: {
            name: 'JsonWebTokenError',
            message: 'invalid token'
          },
          jse_info: {
            jwtToVerify:
              'ayJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZvb0BiYXIuY29tIiwiZXhwIjoxNTY5OTI1NzgxLCJpYXQiOjE1NjY5MDQyNzF9.fkuvdFDYLgEqBt96I4NnNGTWPgoXKZlCNc-Ftj1wDUU'
          },
          message: 'Failed to authenticate: invalid token'
        }
      ],
      payload: null
    });

    //Teardown
    clock.restore();
  });
});
