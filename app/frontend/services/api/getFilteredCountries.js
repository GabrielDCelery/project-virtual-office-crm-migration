import axios from 'axios';

export const getFilteredCountries = async ({ filterTerm, limit }) => {
  const res = await axios({
    method: 'POST',
    url: `/api/countries/filter`,
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

export default getFilteredCountries;
