import { createSelector } from 'reselect';

const getCities = state => {
  return state.recommendations.cities.items;
};

export const selectorGetCitiesRecommendations = createSelector(
  [getCities],
  cities => {
    return cities.map(({ id, name, countryId, countryName }) => ({
      id: id,
      countryId,
      name: `${name} (${countryName})`,
      countryName
    }));
  }
);
