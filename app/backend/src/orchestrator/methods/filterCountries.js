const {
  SERVICE_NAME_REDIS,
  SERVICE_NAME_DATABASE,
  SERVICE_METHOD_GET_ALL_COUNTRIES,
  SERVICE_METHOD_GET_REDIS_VALUE,
  SERVICE_METHOD_SET_REDIS_VALUE,
  REDIS_KEY_COUNTRIES
} = globalRequire('common/enums');
const { Filterer } = globalRequire('common/utils');

module.exports = ({ services }) => {
  const filterCountryRecords = ({ filterTerm, limit, records }) => {
    const filterer = Filterer.createInstance();

    return filterer.filterObjects({
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
