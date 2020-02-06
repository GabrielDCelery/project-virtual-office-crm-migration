const { expect } = require('chai');
const sinon = require('sinon');
const services = globalRequire('services');
const {
  SERVICE_NAME_DATABASE,
  SERVICE_METHOD_CREATE_NATURAL_PERSON
} = globalRequire('common/enums');

module.exports = () => {
  describe('SERVICE_METHOD_CREATE_NATURAL_PERSON', () => {
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
          method: SERVICE_METHOD_CREATE_NATURAL_PERSON,
          parameters: {
            firstName: 'John',
            lastName: 'Doe',
            motherName: 'Jane Doe',
            birthDate: '1979-08-05',
            identifierDocumentType: 'passport',
            identifierDocumentNumber: 'HIJKL',
            permanentAddressId: 2
          }
        });

      // Then
      expect(result).to.deep.equal({
        id: 4,
        firstName: 'John',
        lastName: 'Doe',
        motherName: 'Jane Doe',
        birthDate: new Date('1979-08-05'),
        identifierDocumentType: 'passport',
        identifierDocumentNumber: 'HIJKL',
        permanentAddressId: 2,
        createdAt: new Date('2019-08-27T11:11:11.000Z'),
        updatedAt: new Date('2019-08-27T11:11:11.000Z')
      });
      expect(transaction).to.deep.equal(null);
    });
  });
};
