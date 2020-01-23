import axios from 'axios';

class MailSenderNames {
  async create({ name }) {
    const { data } = await axios({
      method: 'POST',
      url: `/api/mailSenderNames/create`,
      responseType: 'json',
      data: { name }
    });

    const { success, payload, errors } = data;

    return { success, payload, errors };
  }

  async findAll() {
    const { data } = await axios({
      method: 'GET',
      url: `/api/mailSenderNames/findAll`,
      responseType: 'json'
    });

    const { success, payload, errors } = data;

    return { success, payload, errors };
  }
}

export default new MailSenderNames();
