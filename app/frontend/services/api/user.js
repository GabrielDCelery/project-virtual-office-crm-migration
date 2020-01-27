import axios from 'axios';

class UserAPI {
  async login({ email, password }) {
    const { data } = await axios({
      method: 'POST',
      url: `/api/users/login`,
      responseType: 'json',
      data: { email, password }
    });

    return data;
  }

  async logout() {
    const { data } = await axios({
      method: 'POST',
      url: `/api/users/logout`,
      responseType: 'json',
      data: null
    });

    return data;
  }

  async authenticateByCookie() {
    const { data } = await axios({
      method: 'POST',
      url: `/api/users/authenticateByCookie`,
      responseType: 'json'
    });

    return data;
  }
}

export default new UserAPI();
