module.exports = ({ EServiceMethod, EServiceName, services }) => {
  const { SERVICE_NAME_DATABASE } = EServiceName;
  const { SERVICE_METHOD_GET_ALL_CITIES } = EServiceMethod;

  return async () => {
    const { result } = await services
      .get(SERVICE_NAME_DATABASE)
      .execute({ method: SERVICE_METHOD_GET_ALL_CITIES });

    return result;
  };
};
