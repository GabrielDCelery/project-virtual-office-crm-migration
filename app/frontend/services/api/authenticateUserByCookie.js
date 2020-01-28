import axios from 'axios';

export const authenticateUserByCookie = async () => {
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
