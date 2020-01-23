import _ from 'lodash';
import { createSelector } from 'reselect';

const getAddNewMailFormFields = state => {
  return _.get(state, ['mails', 'addNewForm'], {});
};

export const selectorAddNewMailFormFieldFactory = createSelector(
  [getAddNewMailFormFields],
  formFields => {
    return _.memoize(fieldName => {
      return formFields[fieldName];
    });
  }
);
