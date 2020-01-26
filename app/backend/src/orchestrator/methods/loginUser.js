const { EServiceName, EServiceMethod } = globalRequire('common/enums');
const { SERVICE_NAME_DATABASE, SERVICE_NAME_AUTHENTICATION } = EServiceName;
const { SERVICE_METHOD_LOGIN_USER, SERVICE_METHOD_SIGN_JWT } = EServiceMethod;

module.exports = ({ services }) => {
  return async ({ email, password }) => {
    const {
      result: { id, rules }
    } = await services
      .get(SERVICE_NAME_DATABASE)
      .method(SERVICE_METHOD_LOGIN_USER)
      .execute({ email, password });

    const {
      result: { token }
    } = await services
      .get(SERVICE_NAME_AUTHENTICATION)
      .method(SERVICE_METHOD_SIGN_JWT)
      .execute({ id, email });

    return { email, rules, token };
  };
};
