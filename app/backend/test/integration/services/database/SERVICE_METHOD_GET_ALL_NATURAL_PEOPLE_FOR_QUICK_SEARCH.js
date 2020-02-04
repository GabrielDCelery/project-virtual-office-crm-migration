const { expect } = require('chai');
const sinon = require('sinon');
const services = globalRequire('services');
const {
  SERVICE_NAME_DATABASE,
  SERVICE_METHOD_GET_ALL_NATURAL_PEOPLE_FOR_QUICK_SEARCH
} = globalRequire('common/enums');

module.exports = () => {
  describe('SERVICE_METHOD_GET_ALL_NATURAL_PEOPLE_FOR_QUICK_SEARCH', () => {
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
        .execute({
          method: SERVICE_METHOD_GET_ALL_NATURAL_PEOPLE_FOR_QUICK_SEARCH
        });

      // Then
      expect(result).to.deep.equal([
        {
          id: 1,
          firstName: 'Gabriel',
          lastName: 'Celery',
          motherName: 'Ildiko Zeller'
        },
        {
          id: 2,
          firstName: 'Thomas',
          lastName: 'Jefferson',
          motherName: 'Jane Randolph Jefferson'
        },
        {
          id: 3,
          firstName: 'Ildikó',
          lastName: 'Zeller',
          motherName: 'Viszlovszki Ildikó'
        }
      ]);
      expect(transaction).to.deep.equal(null);
    });
  });
};
