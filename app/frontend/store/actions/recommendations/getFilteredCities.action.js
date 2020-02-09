import {
  RECOMMENDATIONS_CITIES_SET,
  RECOMMENDATIONS_CITIES_RESET,
  RECOMMENDATIONS_CITIES_AJAX_START,
  RECOMMENDATIONS_CITIES_AJAX_FINISH,
  OPEN_ERROR_SNACKBAR
} from '~/store/constants';
import services from '~/services';

export const actionRecommendationsGetFilteredCities = ({ filterTerm }) => {
  return async dispatch => {
    dispatch({ type: RECOMMENDATIONS_CITIES_AJAX_START });
    dispatch({ type: RECOMMENDATIONS_CITIES_RESET });

    const { success, error, payload } = await services.api.cities.filter({
      filterTerm,
      limit: 5
    });

    dispatch({ type: RECOMMENDATIONS_CITIES_AJAX_FINISH });

    if (!success) {
      dispatch({ type: OPEN_ERROR_SNACKBAR, message: error.message });
      return;
    }

    dispatch({ type: RECOMMENDATIONS_CITIES_SET, items: payload });
  };
};
