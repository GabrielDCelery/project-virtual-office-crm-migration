import _ from 'lodash';
import { createSelector } from 'reselect';

const getMailSubjects = state => {
  return _.get(state, ['mails', 'subjects', 'items']);
};

export const selectorGetMailSubjectRecommendations = createSelector(
  [getMailSubjects],
  mailSubjects => {
    return mailSubjects.map(({ id, longSubject }) => ({
      value: id,
      label: longSubject
    }));
  }
);
