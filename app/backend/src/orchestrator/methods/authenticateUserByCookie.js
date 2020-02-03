module.exports = ({ EServiceMethod, EServiceName, services }) => {
  const { SERVICE_NAME_DATABASE, SERVICE_NAME_AUTHENTICATION } = EServiceName;
  const {
    SERVICE_METHOD_GET_USER_RULES,
    SERVICE_METHOD_VERIFY_JWT
  } = EServiceMethod;

  return async ({ jwtToken }) => {
    const { email } = await services.get(SERVICE_NAME_AUTHENTICATION).execute({
      method: SERVICE_METHOD_VERIFY_JWT,
      parameters: { jwtToken }
    });

    const {
      result: { rules }
    } = await services.get(SERVICE_NAME_DATABASE).execute({
      method: SERVICE_METHOD_GET_USER_RULES,
      parameters: { email }
    });

    return { email, rules };
  };
};
