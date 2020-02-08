import axios from 'axios';

export const getFilteredNaturalPeople = async ({ filterTerm, limit }) => {
  const res = await axios({
    method: 'POST',
    url: `/api/naturalPeople/filter`,
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

export default getFilteredNaturalPeople;
