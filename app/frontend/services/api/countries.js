import axios from 'axios';

class CountriesAPI {
  async getAll() {
    const res = await axios({
      method: 'GET',
      url: `/api/countries/getAll`,
      responseType: 'json',
      withCredentials: true
    });

    const { data } = res;

    return data;
  }

  async filter({ filterTerm, limit }) {
    const res = await axios({
      method: 'POST',
      url: `/api/countries/filter`,
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

module.exports = new CountriesAPI();
