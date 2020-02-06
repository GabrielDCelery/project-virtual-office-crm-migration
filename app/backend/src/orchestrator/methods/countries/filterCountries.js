module.exports = ({
  EServiceMethod,
  EServiceName,
  ERedisKeys,
  services,
  utils
}) => {
  const { SERVICE_NAME_REDIS, SERVICE_NAME_DATABASE } = EServiceName;
  const {
    SERVICE_METHOD_GET_ALL_COUNTRIES,
    SERVICE_METHOD_GET_REDIS_VALUE,
    SERVICE_METHOD_SET_REDIS_VALUE
  } = EServiceMethod;
  const { REDIS_KEY_COUNTRIES } = ERedisKeys;

  const filterCountryRecords = ({ filterTerm, limit, records }) => {
    return utils.Filterer.createInstance().filterObjects({
      filterTerm,
      filterBys: ['name', 'shortName'],
      limit,
      objects: records
    });
  };

  return async ({ filterTerm, limit }) => {
    const cached = await services.get(SERVICE_NAME_REDIS).execute({
      method: SERVICE_METHOD_GET_REDIS_VALUE,
      parameters: {
        key: REDIS_KEY_COUNTRIES
      }
    });

    if (cached) {
      return filterCountryRecords({ filterTerm, limit, records: cached });
    }

    const { result } = await services
      .get(SERVICE_NAME_DATABASE)
      .execute({ method: SERVICE_METHOD_GET_ALL_COUNTRIES });

    await services.get(SERVICE_NAME_REDIS).execute({
      method: SERVICE_METHOD_SET_REDIS_VALUE,
      parameters: {
        key: REDIS_KEY_COUNTRIES,
        value: result
      }
    });

    return filterCountryRecords({ filterTerm, limit, records: result });
  };
};
