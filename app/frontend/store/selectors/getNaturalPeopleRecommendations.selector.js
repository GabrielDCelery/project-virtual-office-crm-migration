import { createSelector } from 'reselect';

const getNaturalPeople = state => {
  return state.recommendations.naturalPeople.items;
};

export const selectorGetNaturalPeopleRecommendations = createSelector(
  [getNaturalPeople],
  naturalPeople => {
    return naturalPeople.map(({ id, firstName, lastName, motherName }) => ({
      id: id,
      name: `${lastName} ${firstName} (mother: ${motherName})`
    }));
  }
);
