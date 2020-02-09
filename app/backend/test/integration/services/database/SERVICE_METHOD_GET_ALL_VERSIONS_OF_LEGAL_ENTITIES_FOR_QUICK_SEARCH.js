const { expect } = require('chai');
const sinon = require('sinon');
const services = globalRequire('services');
const {
  SERVICE_NAME_DATABASE,
  SERVICE_METHOD_GET_ALL_VERSIONS_OF_LEGAL_ENTITIES_FOR_QUICK_SEARCH
} = globalRequire('common/enums');

module.exports = () => {
  describe('SERVICE_METHOD_GET_ALL_VERSIONS_OF_LEGAL_ENTITIES_FOR_QUICK_SEARCH', () => {
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

    it('returns a list of all versions of all legal entities for quick search', async () => {
      // Given

      // When
      const { result, transaction } = await services
        .get(SERVICE_NAME_DATABASE)
        .execute({
          method: SERVICE_METHOD_GET_ALL_VERSIONS_OF_LEGAL_ENTITIES_FOR_QUICK_SEARCH
        });

      // Then
      expect(result).to.deep.equal([
        {
          id: 1,
          longName: 'Bacz Invest Elektro Technikai',
          type: 'limited liability company',
          createdAt: new Date('2019-08-01T11:11:11.000Z'),
          updatedAt: new Date('2019-08-01T11:11:11.000Z'),
          version: 0
        },
        {
          id: 2,
          longName: 'Chrono-Line',
          type: 'limited liability company',
          createdAt: new Date('2018-08-03T11:11:11.000Z'),
          updatedAt: new Date('2019-08-09T11:11:11.000Z'),
          version: 1
        },
        {
          id: 2,
          longName: 'Chrono-Trigger',
          type: 'limited liability company',
          createdAt: new Date('2018-08-03T11:11:11.000Z'),
          updatedAt: new Date('2018-08-03T11:11:11.000Z'),
          version: 0
        },
        {
          id: 3,
          longName: 'Zeller & Zeller',
          type: 'limited liability company',
          createdAt: new Date('2018-08-03T11:11:11.000Z'),
          updatedAt: new Date('2019-08-09T11:11:11.000Z'),
          version: 0
        }
      ]);
      expect(transaction).to.deep.equal(null);
    });
  });
};
