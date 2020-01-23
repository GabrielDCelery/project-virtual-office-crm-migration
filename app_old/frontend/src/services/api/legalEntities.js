import axios from 'axios';

class LegalEntities {
  async getLatestVersionsOfAllRecords() {
    const { data } = await axios({
      method: 'GET',
      url: `/api/legalEntities/getLatestVersionsOfAllRecords`,
      responseType: 'json'
    });

    const { success, payload, errors } = data;

    return { success, payload, errors };
  }

  async getTypes() {
    const { data } = await axios({
      method: 'GET',
      url: `/api/legalEntities/getTypes`,
      responseType: 'json'
    });

    const { success, payload, errors } = data;

    return { success, payload, errors };
  }
}

export default new LegalEntities();
