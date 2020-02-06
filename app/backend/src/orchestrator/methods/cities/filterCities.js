module.exports = ({
  EServiceMethod,
  EServiceName,
  ERedisKeys,
  services,
  utils
}) => {
  const { SERVICE_NAME_DATABASE, SERVICE_NAME_REDIS } = EServiceName;
  const {
    SERVICE_METHOD_GET_ALL_CITIES,
    SERVICE_METHOD_GET_REDIS_VALUE,
    SERVICE_METHOD_SET_REDIS_VALUE
  } = EServiceMethod;
  const { REDIS_KEY_CITIES } = ERedisKeys;

  const filterCityRecords = ({ filterTerm, limit, records }) => {
    return utils.Filterer.createInstance().filterObjects({
      filterTerm,
      filterBys: ['name'],
      limit,
      objects: records
    });
  };

  return async ({ filterTerm, limit }) => {
    const cached = await services.get(SERVICE_NAME_REDIS).execute({
      method: SERVICE_METHOD_GET_REDIS_VALUE,
      parameters: {
        key: REDIS_KEY_CITIES
      }
    });

    if (cached) {
      return filterCityRecords({ filterTerm, limit, records: cached });
    }

    const { result } = await services
      .get(SERVICE_NAME_DATABASE)
      .execute({ method: SERVICE_METHOD_GET_ALL_CITIES });

    await services.get(SERVICE_NAME_REDIS).execute({
      method: SERVICE_METHOD_SET_REDIS_VALUE,
      parameters: {
        key: REDIS_KEY_CITIES,
        value: result
      }
    });

    return filterCityRecords({ filterTerm, limit, records: result });
  };
};
