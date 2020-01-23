module.exports = services => {
  return async ({ email, password }) => {
    const dbAuthenticationResult = await services
      .get('database')
      .execute('users', 'login', { email, password });

    if (!dbAuthenticationResult.success) {
      return dbAuthenticationResult;
    }

    const jwtResult = await services
      .get('authentication')
      .execute('jwt', 'sign', {
        id: dbAuthenticationResult.payload.id,
        email: dbAuthenticationResult.payload.email
      });

    if (!jwtResult.success) {
      return jwtResult;
    }

    return {
      success: true,
      errors: [],
      payload: {
        email: dbAuthenticationResult.payload.email,
        rules: dbAuthenticationResult.payload.rules,
        token: jwtResult.payload
      }
    };
  };
};
