import {
  START_FETCHING_ALL_VERSIONS_OF_ALL_LEGAL_ENTITIES,
  FINSIHED_FETCHING_ALL_VERSIONS_OF_ALL_LEGAL_ENTITIES,
  ERRORED_FETCHING_ALL_VERSIONS_OF_ALL_LEGAL_ENTITIES
} from './legalEntities.constants';
import services from 'services';

export const actionGetLatestVersionsOfAllEntities = () => {
  return async dispatch => {
    dispatch({ type: START_FETCHING_ALL_VERSIONS_OF_ALL_LEGAL_ENTITIES });

    const {
      success,
      payload
    } = await services.api.legalEntities.getLatestVersionsOfAllRecords();

    if (!success) {
      return dispatch({
        type: ERRORED_FETCHING_ALL_VERSIONS_OF_ALL_LEGAL_ENTITIES
      });
    }

    dispatch({
      type: FINSIHED_FETCHING_ALL_VERSIONS_OF_ALL_LEGAL_ENTITIES,
      allVersionsOfAllRecords: payload
    });
  };
};
