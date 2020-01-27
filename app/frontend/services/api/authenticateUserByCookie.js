import axios from 'axios';

export const authenticateUserByCookie = async () => {
  const { data } = await axios({
    method: 'POST',
    url: `/api/users/authenticateByCookie`,
    responseType: 'json'
  });

  return data;
};

export default authenticateUserByCookie;
