import axios from 'axios';

export const getAllCountries = async () => {
  const res = await axios({
    method: 'GET',
    url: `/api/countries/getAll`,
    responseType: 'json',
    withCredentials: true
  });

  const { data } = res;

  return data;
};

export default getAllCountries;
