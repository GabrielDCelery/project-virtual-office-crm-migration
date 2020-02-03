module.exports = ({ EServiceMethod, EServiceName, services }) => {
  const { SERVICE_NAME_DATABASE } = EServiceName;
  const { SERVICE_METHOD_CREATE_NATURAL_PERSON } = EServiceMethod;

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
