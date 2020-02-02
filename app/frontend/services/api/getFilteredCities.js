import axios from 'axios';

export const getFilteredCities = async ({ filterTerm, limit }) => {
  const res = await axios({
    method: 'POST',
    url: `/api/cities/filter`,
    data: {
      filterTerm,
      limit
    },
    responseType: 'json',
    withCredentials: true
  });

  const { data } = res;

  return data;
};

export default getFilteredCities;
