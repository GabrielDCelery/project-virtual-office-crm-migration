class Users {
  constructor({ CErrorMessage, models }) {
    this.CErrorMessage = CErrorMessage;
    this.models = models;
  }

  async _findByEmail(email, transaction) {
    const user = await this.models.Users.query(transaction)
      .first()
      .where({
        email
      });

    return user || null;
  }

  async register({ email, password, transaction }) {
    const user = await this._findByEmail(email, transaction);

    if (user) {
      throw new Error(ERROR_MESSAGE_EMAIL_ALREADY_REGISTERED);
    }

    return await this.models.Users.query(transaction).insert({
      email,
      password,
      status: this.models.Users.STATUSES.INACTIVE
    });
  }

  async login({ email, password, transaction }) {
    const {
      ERROR_MESSAGE_USER_INACTIVE,
      ERROR_MESSAGE_USER_SUSPENDED,
      ERROR_MESSAGE_EMAIL_AND_PASSWORD_COMBINATION_INVALID
    } = this.CErrorMessage;
    const user = await this._findByEmail(email, transaction);

    if (!user || !(await user.verifyPassword(password))) {
      throw new Error(ERROR_MESSAGE_EMAIL_AND_PASSWORD_COMBINATION_INVALID);
    }

    if (user.status === this.models.Users.STATUSES.INACTIVE) {
      throw new Error(ERROR_MESSAGE_USER_INACTIVE);
    }

    if (user.status === this.models.Users.STATUSES.SUSPENDED) {
      throw new Error(ERROR_MESSAGE_USER_SUSPENDED);
    }

    return {
      id: user.id,
      email: user.email,
      rules: ['*']
    };
  }

  async getRules({ email, transaction }) {
    return {
      email,
      rules: ['*']
    };
  }
}

module.exports = Users;
