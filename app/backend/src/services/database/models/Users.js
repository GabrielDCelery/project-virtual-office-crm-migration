const { Model } = require('objection');
const Password = require('objection-password')(12);

class Users extends Password(Model) {
  static get tableName() {
    return 'users';
  }

  static get STATUSES() {
    return {
      INACTIVE: 'inactive',
      ACTIVE: 'active',
      SUSPENDED: 'suspended'
    };
  }

  static get ERRORS() {
    return {
      EMAIL_ALREADY_REGISTERED: 'Email already registered!',
      EMAIL_AND_PASSWORD_COMBINATION_INVALID:
        'The email and password combination you entered is invalid!',
      USER_INACTIVE: 'This account is inactive!',
      USER_SUSPENDED: 'This account is suspended!'
    };
  }

  async $beforeInsert(context) {
    await super.$beforeInsert(context);

    const date = new Date().toISOString();

    this.created_at = date;
    this.updated_at = date;
  }

  async $beforeUpdate(context) {
    await super.$beforeInsert(context);

    this.updated_at = new Date().toISOString();
  }
}

module.exports = Users;
