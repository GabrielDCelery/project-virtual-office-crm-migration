import { createSelector } from 'reselect';

const getCountries = state => {
  return state.recommendations.countries.items;
};

export const selectorGetCountriesRecommendations = createSelector(
  [getCountries],
  countries => {
    return countries.map(({ id, name, shortName }) => ({
      id: id,
      name: `${name} (${shortName})`
    }));
  }
);
