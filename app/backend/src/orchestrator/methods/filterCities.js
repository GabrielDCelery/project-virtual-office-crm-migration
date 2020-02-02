const { SERVICE_NAME_DATABASE, SERVICE_METHOD_GET_ALL_CITIES } = globalRequire(
  'common/enums'
);
const { Filterer } = globalRequire('common/utils');

module.exports = ({ services }) => {
  const filterer = Filterer.createInstance();

  return async ({ filterTerm, limit }) => {
    const { result } = await services
      .get(SERVICE_NAME_DATABASE)
      .execute({ method: SERVICE_METHOD_GET_ALL_CITIES });

    return filterer.filterObjects({
      filterTerm,
      filterBys: ['name'],
      limit,
      objects: result
    });
  };
};
