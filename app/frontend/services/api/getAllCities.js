import axios from 'axios';

export const getAllCities = async () => {
  const res = await axios({
    method: 'GET',
    url: `/api/cities/getAll`,
    responseType: 'json',
    withCredentials: true
  });

  const { data } = res;

  return data;
};

export default getAllCities;
