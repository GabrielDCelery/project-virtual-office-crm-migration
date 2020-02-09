import {
  RECOMMENDATIONS_LEGAL_ENTITIES_SET,
  RECOMMENDATIONS_LEGAL_ENTITIES_RESET,
  RECOMMENDATIONS_LEGAL_ENTITIES_AJAX_START,
  RECOMMENDATIONS_LEGAL_ENTITIES_AJAX_FINISH,
  OPEN_ERROR_SNACKBAR
} from '~/store/constants';
import services from '~/services';

export const actionRecommendationsGetFilteredLegalEntities = ({
  filterTerm
}) => {
  return async dispatch => {
    dispatch({ type: RECOMMENDATIONS_LEGAL_ENTITIES_AJAX_START });
    dispatch({ type: RECOMMENDATIONS_LEGAL_ENTITIES_RESET });

    const { success, error, payload } = await services.api.legalEntities.filter(
      {
        filterTerm,
        limit: 5
      }
    );

    dispatch({ type: RECOMMENDATIONS_LEGAL_ENTITIES_AJAX_FINISH });

    if (!success) {
      dispatch({ type: OPEN_ERROR_SNACKBAR, message: error.message });
      return;
    }

    dispatch({ type: RECOMMENDATIONS_LEGAL_ENTITIES_SET, items: payload });
  };
};
