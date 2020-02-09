import {
  RECOMMENDATIONS_COUNTRIES_SET,
  RECOMMENDATIONS_COUNTRIES_RESET,
  RECOMMENDATIONS_COUNTRIES_AJAX_START,
  RECOMMENDATIONS_COUNTRIES_AJAX_FINISH,
  OPEN_ERROR_SNACKBAR
} from '~/store/constants';
import services from '~/services';

export const actionRecommendationsGetFilteredCountries = ({ filterTerm }) => {
  return async dispatch => {
    dispatch({ type: RECOMMENDATIONS_COUNTRIES_AJAX_START });
    dispatch({ type: RECOMMENDATIONS_COUNTRIES_RESET });

    const { success, error, payload } = await services.api.countries.filter({
      filterTerm,
      limit: 5
    });

    dispatch({ type: RECOMMENDATIONS_COUNTRIES_AJAX_FINISH });

    if (!success) {
      dispatch({ type: OPEN_ERROR_SNACKBAR, message: error.message });
      return;
    }

    dispatch({ type: RECOMMENDATIONS_COUNTRIES_SET, items: payload });
  };
};
