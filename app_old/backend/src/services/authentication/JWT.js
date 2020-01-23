class JWT {
  constructor({ config, constants, nodeModules }) {
    this.config = config;
    this.constants = constants;
    this.nodeModules = nodeModules;
    this.verify = this.verify.bind(this);
    this.sign = this.sign.bind(this);
  }

  async verify(jwtToVerify) {
    const {
      AUTHENTICATION_ERROR_MESSAGE_FAILED_TO_AUTHENTICATE,
      AUTHENTICATION_ERROR_NAME_CONTROLLER,
      JWT_ERROR_NAME_TOKEN_EXPIRED,
      JWT_ERROR_NAME_INVALID_TOKEN
    } = this.constants;
    const { jsonwebtoken, verror } = this.nodeModules;
    const { VError } = verror;

    return new Promise((accept, reject) => {
      jsonwebtoken.verify(jwtToVerify, this.config.secret, (error, decoded) => {
        if (error) {
          if (
            error.name === JWT_ERROR_NAME_TOKEN_EXPIRED ||
            error.name === JWT_ERROR_NAME_INVALID_TOKEN
          ) {
            return reject(
              new VError(
                {
                  name: AUTHENTICATION_ERROR_NAME_CONTROLLER,
                  cause: error,
                  info: {
                    jwtToVerify
                  }
                },
                AUTHENTICATION_ERROR_MESSAGE_FAILED_TO_AUTHENTICATE
              )
            );
          }

          return reject(error);
        }

        return accept(decoded);
      });
    });
  }

  async sign(dataToSign) {
    const { jsonwebtoken } = this.nodeModules;

    return new Promise((accept, reject) => {
      jsonwebtoken.sign(
        {
          ...dataToSign,
          exp: Math.floor(Date.now() / 1000) + this.config.expiryInSeconds
        },
        this.config.secret,
        (error, token) => {
          if (error) {
            return reject(error);
          }

          return accept(token);
        }
      );
    });
  }
}

module.exports = JWT;
