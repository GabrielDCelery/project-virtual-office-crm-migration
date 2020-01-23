import _ from 'lodash';
import { createSelector } from 'reselect';

const getLegalEntityTypes = state => {
  return _.get(state, ['legalEntities', 'types', 'items']);
};

export const selectorGetLegalEntityTypes = createSelector(
  [getLegalEntityTypes],
  legalEntityTypes => {
    return legalEntityTypes.map(type => {
      return {
        label: type,
        value: type
      };
    });
  }
);
