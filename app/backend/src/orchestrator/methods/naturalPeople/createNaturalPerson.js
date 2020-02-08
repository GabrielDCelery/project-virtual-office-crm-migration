module.exports = ({ EServiceMethod, EServiceName, ERedisKeys, services }) => {
  const { SERVICE_NAME_DATABASE, SERVICE_NAME_REDIS } = EServiceName;
  const {
    SERVICE_METHOD_CREATE_NATURAL_PERSON,
    SERVICE_METHOD_SET_REDIS_VALUE
  } = EServiceMethod;
  const { REDIS_KEY_NATURAL_PEOPLE_QUICK_LIST } = ERedisKeys;

  return async ({
    firstName,
    lastName,
    motherName,
    birthDate,
    identifierDocumentType,
    identifierDocumentNumber,
    permanentAddressId
  }) => {
    await services.get(SERVICE_NAME_REDIS).execute({
      method: SERVICE_METHOD_SET_REDIS_VALUE,
      parameters: {
        key: REDIS_KEY_NATURAL_PEOPLE_QUICK_LIST,
        value: null
      }
    });

    const { result } = await services.get(SERVICE_NAME_DATABASE).execute({
      method: SERVICE_METHOD_CREATE_NATURAL_PERSON,
      parameters: {
        firstName,
        lastName,
        motherName,
        birthDate,
        identifierDocumentType,
        identifierDocumentNumber,
        permanentAddressId
      }
    });

    return result;
  };
};
