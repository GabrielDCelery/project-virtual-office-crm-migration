const { EServiceName, EServiceMethod } = globalRequire('common/enums');
const { SERVICE_NAME_DATABASE } = EServiceName;
const { SERVICE_METHOD_GET_ALL_CITIES } = EServiceMethod;

module.exports = ({ services }) => {
  return async () => {
    return await services
      .get(SERVICE_NAME_DATABASE)
      .method(SERVICE_METHOD_GET_ALL_CITIES)
      .execute();
  };
};
