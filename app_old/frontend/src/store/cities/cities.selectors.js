import _ from 'lodash';
import { createSelector } from 'reselect';

const getCities = state => {
  return _.get(state, ['cities', 'items']);
};

export const selectorGetCityRecommendations = createSelector(
  [getCities],
  cities => {
    return cities.map(
      ({ id, name, countryId, countryName, countryShortName }) => ({
        value: id,
        label: `${name} (${countryName})`,
        country: {
          value: countryId,
          label: `${countryName} (${countryShortName})`
        }
      })
    );
  }
);
