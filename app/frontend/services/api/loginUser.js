import axios from 'axios';

export const loginUser = async ({ email, password }) => {
  const { data } = await axios({
    method: 'POST',
    url: `/api/users/login`,
    responseType: 'json',
    data: { email, password }
  });

  return data;
};

export default loginUser;
