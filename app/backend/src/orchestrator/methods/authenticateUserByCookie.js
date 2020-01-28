const { EServiceName, EServiceMethod } = globalRequire('common/enums');
const { SERVICE_NAME_DATABASE, SERVICE_NAME_AUTHENTICATION } = EServiceName;
const {
  SERVICE_METHOD_GET_USER_RULES,
  SERVICE_METHOD_VERIFY_JWT
} = EServiceMethod;

module.exports = ({ services }) => {
  return async ({ jwtToken }) => {
    const { email } = await services
      .get(SERVICE_NAME_AUTHENTICATION)
      .method(SERVICE_METHOD_VERIFY_JWT)
      .execute({ jwtToken });

    const { rules } = await services
      .get(SERVICE_NAME_DATABASE)
      .method(SERVICE_METHOD_GET_USER_RULES)
      .execute({ email });

    return { email, rules };
  };
};
