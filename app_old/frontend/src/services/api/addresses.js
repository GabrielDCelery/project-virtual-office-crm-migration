import axios from 'axios';

class Addresses {
  async findAll() {
    const { data } = await axios({
      method: 'GET',
      url: `/api/addresses`,
      responseType: 'json'
    });

    const { success, payload, errors } = data;

    return { success, payload, errors };
  }
}

export default new Addresses();
