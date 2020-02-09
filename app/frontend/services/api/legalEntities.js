import axios from 'axios';

class LegalEntitiesAPI {
  async filter({ filterTerm, limit }) {
    const res = await axios({
      method: 'POST',
      url: `/api/legalEntities/filter`,
      data: {
        filterTerm,
        limit
      },
      responseType: 'json',
      withCredentials: true
    });

    const { data } = res;

    return data;
  }
}

module.exports = new LegalEntitiesAPI();
