module.exports = ({ EServiceMethod, EServiceName, ERedisKeys, services }) => {
  const {
    SERVICE_NAME_AUTHENTICATION,
    SERVICE_NAME_DATABASE,
    SERVICE_NAME_REDIS
  } = EServiceName;
  const {
    SERVICE_METHOD_GET_REDIS_VALUE,
    SERVICE_METHOD_GET_USER_RULES,
    SERVICE_METHOD_SET_REDIS_VALUE,
    SERVICE_METHOD_VERIFY_JWT
  } = EServiceMethod;
  const { REDIS_KEY_USER_EMAIL } = ERedisKeys;

  return async ({ jwtToken }) => {
    const { email } = await services.get(SERVICE_NAME_AUTHENTICATION).execute({
      method: SERVICE_METHOD_VERIFY_JWT,
      parameters: { jwtToken }
    });

    const cachedUser = await services.get(SERVICE_NAME_REDIS).execute({
      method: SERVICE_METHOD_GET_REDIS_VALUE,
      parameters: {
        key: [REDIS_KEY_USER_EMAIL, email]
      }
    });

    if (cachedUser) {
      const { email, rules } = cachedUser;
      return { email, rules };
    }

    const {
      result: { rules }
    } = await services.get(SERVICE_NAME_DATABASE).execute({
      method: SERVICE_METHOD_GET_USER_RULES,
      parameters: { email }
    });

    await services.get(SERVICE_NAME_REDIS).execute({
      method: SERVICE_METHOD_SET_REDIS_VALUE,
      parameters: {
        key: [REDIS_KEY_USER_EMAIL, email],
        value: { email, rules }
      }
    });

    return { email, rules };
  };
};
