import _ from 'lodash';
import { createSelector } from 'reselect';

const getMailSenderNames = state => {
  return _.get(state, ['mails', 'senderNames', 'items']);
};

export const selectorGetMailSenderNameRecommendations = createSelector(
  [getMailSenderNames],
  mailSenderNames => {
    return mailSenderNames.map(({ id, name }) => ({
      value: id,
      label: name
    }));
  }
);
