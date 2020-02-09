import axios from 'axios';

class AddressesAPI {
  async create({ postcode, city, street }) {
    const res = await axios({
      method: 'POST',
      url: `/api/addresses/create`,
      responseType: 'json',
      data: { postcode, city, street },
      withCredentials: true
    });

    const { data } = res;

    return data;
  }

  async getAll() {
    const res = await axios({
      method: 'GET',
      url: `/api/addresses/getAll`,
      responseType: 'json',
      withCredentials: true
    });

    const { data } = res;

    return data;
  }

  async filter({ filterTerm, limit }) {
    const res = await axios({
      method: 'POST',
      url: `/api/addresses/filter`,
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

module.exports = new AddressesAPI();
