const { SERVICE_NAME_DATABASE, SERVICE_METHOD_GET_ALL_CITIES } = globalRequire(
  'common/enums'
);

module.exports = ({ services }) => {
  return async () => {
    const { result } = await services
      .get(SERVICE_NAME_DATABASE)
      .execute({ method: SERVICE_METHOD_GET_ALL_CITIES });

    return result;
  };
};
