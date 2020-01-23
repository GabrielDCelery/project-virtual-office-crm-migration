const { expect } = require('chai');
//const verror = require('verror');
const sinon = require('sinon');
const services = require('../../../../../src/services');

describe('services.get("database").execute("mailsPendingActions", "findAllPendingEmailNotifications")', () => {
  let clock = null;

  beforeEach(async () => {
    await services
      .get('database')
      .getKnex()
      .seed.run();
    clock = sinon.useFakeTimers(new Date('2019-08-27T11:11:11.000Z').getTime());
  });

  afterEach(async () => {
    clock.restore();
  });

  it('returns all the mails having pending email notifications', async () => {
    // Given
    const controller = 'mailsPendingActions';
    const method = 'findAllPendingEmailNotifications';

    // When
    const result = await services.get('database').execute(controller, method);

    // Then
    expect(result).to.deep.equal({
      success: true,
      service: 'database',
      errors: [],
      payload: [
        {
          id: 1,
          legalEntityName: 'Bacz Invest Elektro Technikai',
          mailSubject: 'Felhívás',
          mailDocumentName: 'bar',
          action: 'confirm sending email notification',
          reason: 'received new mail',
          createdAt: new Date('2019-11-11T11:11:11.000Z'),
          updatedAt: new Date('2019-11-11T11:11:11.000Z')
        }
      ]
    });
  });
});
