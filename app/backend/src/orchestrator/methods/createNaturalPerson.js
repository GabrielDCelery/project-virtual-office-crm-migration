const {
  SERVICE_NAME_DATABASE,
  SERVICE_METHOD_CREATE_NATURAL_PERSON
} = globalRequire('common/enums');

module.exports = ({ services }) => {
  return async ({
    firstName,
    lastName,
    motherName,
    birthDate,
    permanentAddress
  }) => {
    const { result } = await services.get(SERVICE_NAME_DATABASE).execute({
      method: SERVICE_METHOD_CREATE_NATURAL_PERSON,
      parameters: {
        firstName,
        lastName,
        motherName,
        birthDate,
        permanentAddress
      }
    });

    return result;
  };
};
