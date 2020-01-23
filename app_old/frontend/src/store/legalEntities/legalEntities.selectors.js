import _ from 'lodash';
import { createSelector } from 'reselect';

const getLegalEntityAllVersions = state => {
  return _.get(state, ['legalEntities', 'entities', 'allVersionsOfAllRecords']);
};

export const selectorGetLegalEntityRecommendations = createSelector(
  [getLegalEntityAllVersions],
  legalEntityAllVersions => {
    return _.chain(legalEntityAllVersions)
      .uniqBy('longName')
      .map(({ id, longName, type }) => ({
        value: id,
        label: `${longName} ${type}`,
        name: longName
      }))
      .value();
  }
);
