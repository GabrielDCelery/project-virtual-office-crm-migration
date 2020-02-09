const { expect } = require('chai');
const sinon = require('sinon');
const services = globalRequire('services');
const {
  SERVICE_NAME_DATABASE,
  SERVICE_METHOD_GET_ALL_VERSIONS_OF_LEGAL_ENTITIES
} = globalRequire('common/enums');

module.exports = () => {
  describe('SERVICE_METHOD_GET_ALL_VERSIONS_OF_LEGAL_ENTITIES', () => {
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

    it('returns a list of all versions of all legal entities', async () => {
      // Given

      // When
      const { result, transaction } = await services
        .get(SERVICE_NAME_DATABASE)
        .execute({
          method: SERVICE_METHOD_GET_ALL_VERSIONS_OF_LEGAL_ENTITIES
        });

      // Then
      expect(result).to.deep.equal([
        {
          id: 1,
          shortName: 'Bacz Invest',
          longName: 'Bacz Invest Elektro Technikai',
          type: 'limited liability company',
          registrationId: '03-01-131101',
          taxId: '13781174-1-42',
          permanentAddressId: 1,
          createdAt: new Date('2019-08-01T11:11:11.000Z'),
          updatedAt: new Date('2019-08-01T11:11:11.000Z'),
          version: 0
        },
        {
          id: 2,
          shortName: 'Chrono-Line',
          longName: 'Chrono-Line',
          type: 'limited liability company',
          registrationId: '02-03-529212',
          taxId: '31580371-1-42',
          permanentAddressId: 1,
          createdAt: new Date('2018-08-03T11:11:11.000Z'),
          updatedAt: new Date('2019-08-09T11:11:11.000Z'),
          version: 2
        },
        {
          id: 2,
          shortName: 'Chrono-Line',
          longName: 'Chrono-Line',
          type: 'limited liability company',
          registrationId: '02-03-529212',
          taxId: '41580371-1-42',
          permanentAddressId: 1,
          createdAt: new Date('2018-08-03T11:11:11.000Z'),
          updatedAt: new Date('2018-09-02T11:11:11.000Z'),
          version: 1
        },
        {
          id: 2,
          shortName: 'Chrono-Trigger',
          longName: 'Chrono-Trigger',
          type: 'limited liability company',
          registrationId: '02-03-529212',
          taxId: '41580371-1-42',
          permanentAddressId: 1,
          createdAt: new Date('2018-08-03T11:11:11.000Z'),
          updatedAt: new Date('2018-08-03T11:11:11.000Z'),
          version: 0
        },
        {
          id: 3,
          shortName: 'Zeller & Zeller',
          longName: 'Zeller & Zeller',
          type: 'limited liability company',
          registrationId: '01-01-111111',
          taxId: '11111111-1-11',
          permanentAddressId: 1,
          createdAt: new Date('2018-08-03T11:11:11.000Z'),
          updatedAt: new Date('2019-08-09T11:11:11.000Z'),
          version: 0
        }
      ]);
      expect(transaction).to.deep.equal(null);
    });
  });
};
