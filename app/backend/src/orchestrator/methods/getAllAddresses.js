const { EServiceName, EServiceMethod } = globalRequire('common/enums');
const { SERVICE_NAME_DATABASE } = EServiceName;
const { SERVICE_METHOD_GET_ALL_ADDRESSES } = EServiceMethod;

module.exports = ({ services }) => {
  return async () => {
    const { result } = await services
      .get(SERVICE_NAME_DATABASE)
      .method(SERVICE_METHOD_GET_ALL_ADDRESSES)
      .execute();

    return result;
  };
};
