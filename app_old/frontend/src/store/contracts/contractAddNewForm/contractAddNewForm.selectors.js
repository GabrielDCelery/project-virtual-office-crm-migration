import _ from 'lodash';
import { createSelector } from 'reselect';

const getAddNewContractFormFields = state => {
  return _.get(state, ['contracts', 'addNewForm'], {});
};

export const selectorAddNewContractFormFieldFactory = createSelector(
  [getAddNewContractFormFields],
  formFields => {
    return _.memoize(fieldName => {
      return formFields[fieldName];
    });
  }
);
