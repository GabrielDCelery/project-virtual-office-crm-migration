import axios from 'axios';

class MailSubjects {
  async create({ longSubject }) {
    const { data } = await axios({
      method: 'POST',
      url: `/api/mailSubjects/create`,
      responseType: 'json',
      data: { longSubject }
    });

    const { success, payload, errors } = data;

    return { success, payload, errors };
  }

  async findAll() {
    const { data } = await axios({
      method: 'GET',
      url: `/api/mailSubjects/findAll`,
      responseType: 'json'
    });

    const { success, payload, errors } = data;

    return { success, payload, errors };
  }
}

export default new MailSubjects();
