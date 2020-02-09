import axios from 'axios';

class NaturalPeopleAPI {
  async create({
    firstName,
    lastName,
    motherName,
    birthDate,
    identifierDocumentType,
    identifierDocumentNumber,
    permanentAddressId
  }) {
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
  }

  async filter({ filterTerm, limit }) {
    const res = await axios({
      method: 'POST',
      url: `/api/naturalPeople/filter`,
      data: {
        filterTerm,
        limit
      },
      responseType: 'json',
      withCredentials: true
    });

    const { data } = res;

    return data;
  }
}

module.exports = new NaturalPeopleAPI();
