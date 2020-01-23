import axios from 'axios';

class Countries {
  async findAll() {
    const { data } = await axios({
      method: 'GET',
      url: `/api/countries/findAll`,
      responseType: 'json'
    });

    const { success, payload, errors } = data;

    return { success, payload, errors };
  }
}

export default new Countries();
