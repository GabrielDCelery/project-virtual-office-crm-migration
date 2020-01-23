import _ from 'lodash';
import { createSelector } from 'reselect';

const getMailSenders = state => {
  return _.get(state, ['mails', 'senders', 'items']);
};

export const selectorGetMailSenderRecommendations = createSelector(
  [getMailSenders],
  mailSenders => {
    return mailSenders.map(
      ({ id, postcode, cityName, countryName, longStreet, senderName }) => ({
        value: id,
        label: `${senderName}, ${postcode} ${countryName} ${cityName} ${longStreet}`,
        name: senderName
      })
    );
  }
);
