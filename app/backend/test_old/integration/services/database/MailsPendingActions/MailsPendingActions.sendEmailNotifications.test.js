const { expect } = require('chai');
//const verror = require('verror');
const sinon = require('sinon');
const services = require('../../../../../src/services');

describe('services.get("database").execute("mails", "sendEmailNotificationsForReceivedMails")', () => {
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

  it('sets mails to send email notifications to legal entities', async () => {
    // Given
    const controller = 'mailsPendingActions';
    const method = 'sendEmailNotificationsForReceivedMails';
    const args = { ids: [1] };

    // When
    const result = await services
      .get('database')
      .execute(controller, method, args);

    // Then
    expect(result).to.deep.equal({
      success: true,
      errors: [],
      service: 'database',
      payload: true
    });
  });
});
