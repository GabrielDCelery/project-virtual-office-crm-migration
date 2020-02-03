const { Filterer } = globalRequire('common/utils');

module.exports = ({ EServiceMethod, EServiceName, ERedisKeys, services }) => {
  const { SERVICE_NAME_DATABASE, SERVICE_NAME_REDIS } = EServiceName;
  const {
    SERVICE_METHOD_GET_ALL_ADDRESSES,
    SERVICE_METHOD_GET_REDIS_VALUE,
    SERVICE_METHOD_SET_REDIS_VALUE
  } = EServiceMethod;
  const { REDIS_KEY_ADDRESSES } = ERedisKeys;

  const filterAddressRecords = ({ filterTerm, limit, records }) => {
    return Filterer.createInstance().filterObjects({
      filterTerm,
      filterBys: [
        'cityName',
        'longStreet',
        'postcode',
        'countryName',
        'countryShortName'
      ],
      limit,
      objects: records
    });
  };

  return async ({ filterTerm, limit }) => {
    const cached = await services.get(SERVICE_NAME_REDIS).execute({
      method: SERVICE_METHOD_GET_REDIS_VALUE,
      parameters: {
        key: REDIS_KEY_ADDRESSES
      }
    });

    if (cached) {
      return filterAddressRecords({ filterTerm, limit, records: cached });
    }

    const { result } = await services.get(SERVICE_NAME_DATABASE).execute({
      method: SERVICE_METHOD_GET_ALL_ADDRESSES
    });

    await services.get(SERVICE_NAME_REDIS).execute({
      method: SERVICE_METHOD_SET_REDIS_VALUE,
      parameters: {
        key: REDIS_KEY_ADDRESSES,
        value: result
      }
    });

    return filterAddressRecords({ filterTerm, limit, records: result });
  };
};
