import axios from 'axios';

export const createAddress = async ({ postcode, city, street }) => {
  const res = await axios({
    method: 'POST',
    url: `/api/addresses/create`,
    responseType: 'json',
    data: { postcode, city, street },
    withCredentials: true
  });

  const { data } = res;

  return data;
};

export default createAddress;
