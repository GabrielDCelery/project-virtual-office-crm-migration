import _ from 'lodash';
import { createSelector } from 'reselect';

const getUserLoginFormFields = state => {
  return _.get(state, ['user', 'login'], {});
};

export const selectorUserLoginFormFieldFactory = createSelector(
  [getUserLoginFormFields],
  formFields => {
    return _.memoize(fieldName => {
      return formFields[fieldName];
    });
  }
);
