import axios from 'axios';

class UsersAPI {
  async authenticateByCookie() {
    const res = await axios({
      method: 'POST',
      url: `/api/users/authenticateByCookie`,
      responseType: 'json',
      withCredentials: true
    });

    const { data } = res;

    return data;
  }

  async login({ email, password }) {
    const res = await axios({
      method: 'POST',
      url: `/api/users/login`,
      responseType: 'json',
      data: { email, password }
    });

    const { data } = res;

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
}

module.exports = new UsersAPI();
