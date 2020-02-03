module.exports = ({ EServiceMethod, EServiceName, services, utils }) => {
  const { SERVICE_NAME_DATABASE } = EServiceName;
  const { SERVICE_METHOD_GET_ALL_NATURAL_PEOPLE } = EServiceMethod;

  return async ({ filterTerm, limit }) => {
    const { result } = await services.get(SERVICE_NAME_DATABASE).execute({
      method: SERVICE_METHOD_GET_ALL_NATURAL_PEOPLE
    });

    return utils.Filterer.createInstance().filterObjects({
      filterTerm,
      filterBys: ['firstName', 'lastName'],
      limit,
      objects: result
    });
  };
};
