const {
  SERVICE_NAME_DATABASE,
  SERVICE_METHOD_GET_ALL_CITIES,
  SERVICE_NAME_REDIS,
  SERVICE_METHOD_GET_REDIS_VALUE,
  SERVICE_METHOD_SET_REDIS_VALUE,
  REDIS_KEY_CITIES
} = globalRequire('common/enums');
const { Filterer } = globalRequire('common/utils');

module.exports = ({ services }) => {
  const filterCityRecords = ({ filterTerm, limit, records }) => {
    return Filterer.createInstance().filterObjects({
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
