import _ from 'lodash';
import { createSelector } from 'reselect';

const getCountries = state => {
  return _.get(state, ['countries', 'items']);
};

export const selectorGetCountryRecommendations = createSelector(
  [getCountries],
  countries => {
    return countries.map(({ id, name, shortName }) => ({
      value: id,
      label: `${name} (${shortName})`
    }));
  }
);
