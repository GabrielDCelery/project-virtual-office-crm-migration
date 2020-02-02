const { SERVICE_NAME_DATABASE, SERVICE_METHOD_CREATE_ADDRESS } = globalRequire(
  'common/enums'
);

module.exports = ({ services }) => {
  return async ({ postcode, city, street }) => {
    const { result } = await services.get(SERVICE_NAME_DATABASE).execute({
      method: SERVICE_METHOD_CREATE_ADDRESS,
      parameters: { postcode, city, street }
    });

    return result;
  };
};
