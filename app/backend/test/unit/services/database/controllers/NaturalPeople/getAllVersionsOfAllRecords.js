const { expect } = require('chai');
const axios = require('axios');
const sinon = require('sinon');
const services = globalRequire('services');
const {
  SERVICE_NAME_DATABASE,
  SERVICE_METHOD_GET_ALL_NATURAL_PEOPLE
} = globalRequire('common/enums');

module.exports = () => {
  describe('getAllVersionsOfAllRecords', () => {
    let clock = null;
    beforeEach(async () => {
      await services
        .get(SERVICE_NAME_DATABASE)
        .getKnex()
        .seed.run();
      clock = sinon.useFakeTimers(
        new Date('2019-08-27T11:11:11.000Z').getTime()
      );
    });

    afterEach(async () => {
      clock.restore();
    });

    it('returns a list of latest versions of natural people', async () => {
      // Given

      // When
      const { result, transaction } = await services
        .get(SERVICE_NAME_DATABASE)
        .execute({ method: SERVICE_METHOD_GET_ALL_NATURAL_PEOPLE });

      // Then
      expect(result).to.deep.equal([
        {
          id: 1,
          firstName: 'Gabriel',
          lastName: 'Celery',
          motherName: 'Ildiko Zeller',
          birthDate: '1983-11-08T00:00:00.000Z',
          createdAt: '2019-08-01T11:11:11.000Z',
          updatedAt: '2019-08-01T11:11:11.000Z',
          permanentAddress: {
            id: 1,
            postcode: '1033',
            cityName: 'Budapest',
            countryName: 'Hungary',
            countryShortName: 'HU',
            longStreet: 'Miklós u. 13. VIII/42.'
          }
        },
        {
          id: 2,
          firstName: 'Thomas',
          lastName: 'Jefferson',
          motherName: 'Jane Randolph Jefferson',
          birthDate: '1743-04-13T00:00:00.000Z',
          createdAt: '2018-06-03T11:11:11.000Z',
          updatedAt: '2019-08-01T11:11:11.000Z',
          permanentAddress: null
        },
        {
          id: 3,
          firstName: 'Ildikó',
          lastName: 'Zeller',
          motherName: 'Viszlovszki Ildikó',
          birthDate: '1956-10-20T00:00:00.000Z',
          createdAt: '2017-06-03T11:11:11.000Z',
          updatedAt: '2017-06-03T11:11:11.000Z',
          permanentAddress: {
            id: 3,
            postcode: '8000',
            cityName: 'Székesfehérvár',
            countryName: 'Hungary',
            countryShortName: 'HU',
            longStreet: 'Melencei u. 35-37.'
          }
        }
      ]);
      expect(transaction).to.deep.equal(null);
    });
  });
};
