module.exports = ({
  EServiceMethod,
  EServiceName,
  ERedisKeys,
  services,
  utils
}) => {
  const { SERVICE_NAME_DATABASE, SERVICE_NAME_REDIS } = EServiceName;
  const {
    SERVICE_METHOD_GET_ALL_NATURAL_PEOPLE_FOR_QUICK_SEARCH,
    SERVICE_METHOD_GET_REDIS_VALUE,
    SERVICE_METHOD_SET_REDIS_VALUE
  } = EServiceMethod;
  const { REDIS_KEY_NATURLA_PEOPLE_QUICK_LIST } = ERedisKeys;

  const filterNaturalPeopleRecords = ({ filterTerm, limit, records }) => {
    return utils.Filterer.createInstance().filterObjects({
      filterTerm,
      filterBys: ['firstName', 'lastName', 'motherName'],
      limit,
      objects: records
    });
  };

  return async ({ filterTerm, limit }) => {
    const cached = await services.get(SERVICE_NAME_REDIS).execute({
      method: SERVICE_METHOD_GET_REDIS_VALUE,
      parameters: {
        key: REDIS_KEY_NATURLA_PEOPLE_QUICK_LIST
      }
    });

    if (cached) {
      return filterNaturalPeopleRecords({ filterTerm, limit, records: cached });
    }

    const { result } = await services.get(SERVICE_NAME_DATABASE).execute({
      method: SERVICE_METHOD_GET_ALL_NATURAL_PEOPLE_FOR_QUICK_SEARCH
    });

    await services.get(SERVICE_NAME_REDIS).execute({
      method: SERVICE_METHOD_SET_REDIS_VALUE,
      parameters: {
        key: REDIS_KEY_NATURLA_PEOPLE_QUICK_LIST,
        value: result
      }
    });

    return filterNaturalPeopleRecords({ filterTerm, limit, records: result });
  };
};
