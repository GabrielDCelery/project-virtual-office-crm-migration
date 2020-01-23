import {
  ERRORED_FETCHING_ALL_VERSIONS_OF_ALL_LEGAL_ENTITIES,
  FINSIHED_FETCHING_ALL_VERSIONS_OF_ALL_LEGAL_ENTITIES,
  START_FETCHING_ALL_VERSIONS_OF_ALL_LEGAL_ENTITIES
} from './legalEntities.constants';

const initialState = {
  isFetching: false,
  allVersionsOfAllRecords: []
};

export const legalEntitiesReducer = (
  state = initialState,
  { type, allVersionsOfAllRecords }
) => {
  switch (type) {
    case START_FETCHING_ALL_VERSIONS_OF_ALL_LEGAL_ENTITIES:
      return {
        ...state,
        isFetching: true,
        allVersionsOfAllRecords: []
      };

    case FINSIHED_FETCHING_ALL_VERSIONS_OF_ALL_LEGAL_ENTITIES:
      return {
        ...state,
        isFetching: false,
        allVersionsOfAllRecords: allVersionsOfAllRecords
      };

    case ERRORED_FETCHING_ALL_VERSIONS_OF_ALL_LEGAL_ENTITIES:
      return {
        ...state,
        isFetching: false,
        allVersionsOfAllRecords: []
      };
    default:
      return state;
  }
};
