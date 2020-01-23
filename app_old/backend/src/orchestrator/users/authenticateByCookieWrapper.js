module.exports = services => {
  return async jwtToken => {
    const jwtResult = await services
      .get('authentication')
      .execute('jwt', 'verify', jwtToken);

    if (!jwtResult.success) {
      return jwtResult;
    }

    const { email } = jwtResult.payload;

    return await services
      .get('database')
      .execute('users', 'getRules', { email });
  };
};
