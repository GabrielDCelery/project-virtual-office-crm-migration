import axios from 'axios';

class CitiesAPI {
  async getAll() {
    const res = await axios({
      method: 'GET',
      url: `/api/cities/getAll`,
      responseType: 'json',
      withCredentials: true
    });

    const { data } = res;

    return data;
  }

  async filter({ filterTerm, limit }) {
    const res = await axios({
      method: 'POST',
      url: `/api/cities/filter`,
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

module.exports = new CitiesAPI();
