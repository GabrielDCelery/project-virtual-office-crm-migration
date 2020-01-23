import axios from 'axios';

class Cities {
  async findAll() {
    const { data } = await axios({
      method: 'GET',
      url: `/api/cities/findAll`,
      responseType: 'json'
    });

    const { success, payload, errors } = data;

    return { success, payload, errors };
  }
}

export default new Cities();
