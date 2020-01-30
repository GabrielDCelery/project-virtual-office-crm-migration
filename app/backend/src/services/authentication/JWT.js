const {
  ERROR_CONTROLLER_AUTHENTICATION,
  ERROR_MESSAGE_FAILED_TO_AUTHENTICATE,
  ERROR_NAME_INVALID_JWT_TOKEN,
  ERROR_NAME_JWT_TOKEN_EXPIRED
} = globalRequire('common/constants');

class JWT {
  constructor({ config, nodeModules }) {
    this.config = config;
    this.nodeModules = nodeModules;
    this.verify = this.verify.bind(this);
    this.sign = this.sign.bind(this);
  }

  async verify({ jwtToken }) {
    const { jsonwebtoken, verror } = this.nodeModules;
    const { VError } = verror;

    return new Promise((accept, reject) => {
      jsonwebtoken.verify(jwtToken, this.config.secret, (error, decoded) => {
        if (error) {
          if (
            error.name === ERROR_NAME_JWT_TOKEN_EXPIRED ||
            error.name === ERROR_NAME_INVALID_JWT_TOKEN
          ) {
            return reject(
              new VError(
                {
                  name: ERROR_CONTROLLER_AUTHENTICATION,
                  cause: error,
                  info: {
                    jwtToken
                  }
                },
                ERROR_MESSAGE_FAILED_TO_AUTHENTICATE
              )
            );
          }

          return reject(error);
        }

        return accept(decoded);
      });
    });
  }

  async sign({ id, email }) {
    const { jsonwebtoken } = this.nodeModules;

    return new Promise((accept, reject) => {
      jsonwebtoken.sign(
        {
          ...{ id, email },
          exp: Math.floor(Date.now() / 1000) + this.config.expiryInSeconds
        },
        this.config.secret,
        (error, token) => {
          if (error) {
            return reject(error);
          }

          return accept({ token });
        }
      );
    });
  }
}

module.exports = JWT;
