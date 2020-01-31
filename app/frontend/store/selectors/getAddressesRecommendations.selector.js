import { createSelector } from 'reselect';

const getAddresses = state => {
  return state.recommendations.addresses.items;
};

export const selectorGetAddressesRecommendations = createSelector(
  [getAddresses],
  addresses => {
    return addresses.map(
      ({ id, postcode, cityName, countryName, longStreet }) => ({
        id,
        name: `${postcode} ${countryName} ${cityName} ${longStreet}`
      })
    );
  }
);
