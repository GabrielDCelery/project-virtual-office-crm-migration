module.exports = ({
  EServiceMethod,
  EServiceName,
  ERedisKeys,
  services,
  utils
}) => {
  const { SERVICE_NAME_DATABASE, SERVICE_NAME_REDIS } = EServiceName;
  const {
    SERVICE_METHOD_GET_ALL_ENTITY_NAMES,
    SERVICE_METHOD_GET_REDIS_VALUE,
    SERVICE_METHOD_SET_REDIS_VALUE
  } = EServiceMethod;
  const { REDIS_KEY_ENTITY_NAMES } = ERedisKeys;

  const filterRecords = ({ filterTerm, limit, records }) => {
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
        key: REDIS_KEY_ENTITY_NAMES
      }
    });

    if (cached) {
      return filterRecords({ filterTerm, limit, records: cached });
    }

    const { result } = await services.get(SERVICE_NAME_DATABASE).execute({
      method: SERVICE_METHOD_GET_ALL_ENTITY_NAMES
    });

    await services.get(SERVICE_NAME_REDIS).execute({
      method: SERVICE_METHOD_SET_REDIS_VALUE,
      parameters: {
        key: REDIS_KEY_ENTITY_NAMES,
        value: result
      }
    });

    return filterRecords({ filterTerm, limit, records: result });
  };
};
