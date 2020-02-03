module.exports = ({ EServiceMethod, EServiceName, services }) => {
  const { SERVICE_NAME_DATABASE } = EServiceName;
  const { SERVICE_METHOD_CREATE_ADDRESS } = EServiceMethod;

  return async ({ postcode, city, street }) => {
    const { result } = await services.get(SERVICE_NAME_DATABASE).execute({
      method: SERVICE_METHOD_CREATE_ADDRESS,
      parameters: { postcode, city, street }
    });

    return result;
  };
};
