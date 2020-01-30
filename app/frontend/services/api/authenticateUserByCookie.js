import axios from 'axios';

export const authenticateUserByCookie = async () => {
  return {
    email: 'test@test.com',
    rules: ['*']
  };
  const res = await axios({
    method: 'POST',
    url: `/api/users/authenticateByCookie`,
    responseType: 'json',
    withCredentials: true
  });

  const { data } = res;

  return data;
};

export default authenticateUserByCookie;
