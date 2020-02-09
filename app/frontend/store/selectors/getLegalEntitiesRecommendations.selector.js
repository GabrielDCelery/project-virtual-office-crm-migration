import { createSelector } from 'reselect';

const getLegalEntities = state => {
  return state.recommendations.legalEntities.items;
};

export const selectorGetLegalEntitiesRecommendations = createSelector(
  [getLegalEntities],
  legalEntities => {
    return legalEntities.map(({ id, longName, type }) => ({
      id: id,
      name: `${longName} (${type})`
    }));
  }
);
