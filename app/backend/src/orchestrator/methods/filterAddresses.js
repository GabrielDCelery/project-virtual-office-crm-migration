const {
  SERVICE_NAME_DATABASE,
  SERVICE_NAME_REDIS,
  SERVICE_METHOD_GET_ALL_ADDRESSES,
  SERVICE_METHOD_GET_REDIS_VALUE,
  SERVICE_METHOD_SET_REDIS_VALUE,
  REDIS_KEY_ADDRESSES
} = globalRequire('common/enums');
const { Filterer } = globalRequire('common/utils');

module.exports = ({ services }) => {
  const filterAddressRecords = ({ filterTerm, limit, records }) => {
    const filterer = Filterer.createInstance();

    return filterer.filterObjects({
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
