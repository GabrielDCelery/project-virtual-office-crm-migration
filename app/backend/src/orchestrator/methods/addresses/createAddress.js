module.exports = ({ EServiceMethod, EServiceName, ERedisKeys, services }) => {
  const { SERVICE_NAME_DATABASE, SERVICE_NAME_REDIS } = EServiceName;
  const {
    SERVICE_METHOD_CREATE_ADDRESS,
    SERVICE_METHOD_SET_REDIS_VALUE
  } = EServiceMethod;
  const { REDIS_KEY_ADDRESSES } = ERedisKeys;

  return async ({ postcode, city, street }) => {
    await services.get(SERVICE_NAME_REDIS).execute({
      method: SERVICE_METHOD_SET_REDIS_VALUE,
      parameters: {
        key: REDIS_KEY_ADDRESSES,
        value: null
      }
    });

    const { result } = await services.get(SERVICE_NAME_DATABASE).execute({
      method: SERVICE_METHOD_CREATE_ADDRESS,
      parameters: { postcode, city, street }
    });

    return result;
  };
};
