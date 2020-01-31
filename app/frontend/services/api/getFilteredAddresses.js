import axios from 'axios';

export const getFilteredAddresses = async ({ filterTerm, limit }) => {
  const res = await axios({
    method: 'POST',
    url: `/api/addresses/filter`,
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

export default getFilteredAddresses;
