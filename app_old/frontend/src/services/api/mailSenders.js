import axios from 'axios';

class MailSenders {
  async findAll() {
    const { data } = await axios({
      method: 'GET',
      url: `/api/mailSenders/findAll`,
      responseType: 'json'
    });

    const { success, payload, errors } = data;

    return { success, payload, errors };
  }
}

export default new MailSenders();
