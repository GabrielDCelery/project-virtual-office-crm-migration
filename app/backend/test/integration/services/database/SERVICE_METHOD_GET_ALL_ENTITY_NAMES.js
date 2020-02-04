const { expect } = require('chai');
const sinon = require('sinon');
const services = globalRequire('services');
const {
  SERVICE_NAME_DATABASE,
  SERVICE_METHOD_GET_ALL_ENTITY_NAMES
} = globalRequire('common/enums');

module.exports = () => {
  describe('SERVICE_METHOD_GET_ALL_ENTITY_NAMES', () => {
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

    it('returns a list of all entity names', async () => {
      // Given

      // When
      const { result, transaction } = await services
        .get(SERVICE_NAME_DATABASE)
        .execute({
          method: SERVICE_METHOD_GET_ALL_ENTITY_NAMES
        });

      // Then
      expect(result).to.deep.equal([
        {
          id: 1,
          name: 'John Doe'
        },
        {
          id: 2,
          name: 'Uzsoki Utcai Kórház'
        },
        {
          id: 3,
          name: 'Nemzeti Sportközpontok'
        },
        {
          id: 4,
          name: 'NAV'
        },
        {
          id: 5,
          name: 'Lux Hungária Kft.'
        },
        {
          id: 6,
          name: 'IT Services'
        },
        {
          id: 7,
          name: 'UniCredit Bank'
        },
        {
          id: 8,
          name: 'Magyar Posta'
        },
        {
          id: 9,
          name: 'Hajdú-Bihar Megyei Kormányhivatal'
        },
        {
          id: 10,
          name: 'Debreceni Gyógyfürdő Kft.'
        },
        {
          id: 11,
          name: 'Gálos János'
        },
        {
          id: 12,
          name: 'Bacz Invest'
        }
      ]);
      expect(transaction).to.deep.equal(null);
    });
  });
};
