module.exports = ({ EServiceMethod, EServiceName, services }) => {
  const { SERVICE_NAME_DATABASE, SERVICE_NAME_AUTHENTICATION } = EServiceName;
  const { SERVICE_METHOD_LOGIN_USER, SERVICE_METHOD_SIGN_JWT } = EServiceMethod;

  return async ({ email, password }) => {
    const {
      result: { id, rules }
    } = await services.get(SERVICE_NAME_DATABASE).execute({
      method: SERVICE_METHOD_LOGIN_USER,
      parameters: { email, password }
    });

    const { token } = await services.get(SERVICE_NAME_AUTHENTICATION).execute({
      method: SERVICE_METHOD_SIGN_JWT,
      parameters: { id, email }
    });

    return { email, rules, token };
  };
};
