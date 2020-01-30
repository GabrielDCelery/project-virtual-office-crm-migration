import axios from 'axios';

export const getAllAddresses = async () => {
  const res = await axios({
    method: 'GET',
    url: `/api/addresses/getAll`,
    responseType: 'json',
    withCredentials: true
  });

  const { data } = res;

  return data;
};

export default getAllAddresses;
