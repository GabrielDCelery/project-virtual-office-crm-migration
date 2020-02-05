import axios from 'axios';

export const loginUser = async ({ email, password }) => {
  const res = await axios({
    method: 'POST',
    url: `/api/users/login`,
    responseType: 'json',
    data: { email, password }
  });

  const { data } = res;

  return data;
};

export default loginUser;
