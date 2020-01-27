import axios from 'axios';

export const logoutUser = async () => {
  const { data } = await axios({
    method: 'POST',
    url: `/api/users/logout`,
    responseType: 'json',
    data: null
  });

  return data;
};

export default logoutUser;
