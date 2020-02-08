import axios from 'axios';

export const createNaturalPerson = async ({
  firstName,
  lastName,
  motherName,
  birthDate,
  identifierDocumentType,
  identifierDocumentNumber,
  permanentAddressId
}) => {
  const res = await axios({
    method: 'POST',
    url: `/api/naturalPeople/create`,
    responseType: 'json',
    data: {
      firstName,
      lastName,
      motherName,
      birthDate,
      identifierDocumentType,
      identifierDocumentNumber,
      permanentAddressId
    },
    withCredentials: true
  });

  const { data } = res;

  return data;
};

export default createNaturalPerson;
