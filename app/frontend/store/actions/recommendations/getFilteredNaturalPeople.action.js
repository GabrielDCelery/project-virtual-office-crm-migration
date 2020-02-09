import {
  RECOMMENDATIONS_NATURAL_PEOPLE_SET,
  RECOMMENDATIONS_NATURAL_PEOPLE_RESET,
  RECOMMENDATIONS_NATURAL_PEOPLE_AJAX_START,
  RECOMMENDATIONS_NATURAL_PEOPLE_AJAX_FINISH,
  OPEN_ERROR_SNACKBAR
} from '~/store/constants';
import services from '~/services';

export const actionRecommendationsGetFilteredNaturalPeople = ({
  filterTerm
}) => {
  return async dispatch => {
    dispatch({ type: RECOMMENDATIONS_NATURAL_PEOPLE_AJAX_START });
    dispatch({ type: RECOMMENDATIONS_NATURAL_PEOPLE_RESET });

    const {
      success,
      error,
      payload
    } = await services.api.naturalPeople.filter({ filterTerm, limit: 5 });

    dispatch({ type: RECOMMENDATIONS_NATURAL_PEOPLE_AJAX_FINISH });

    if (!success) {
      dispatch({ type: OPEN_ERROR_SNACKBAR, message: error.message });
      return;
    }

    dispatch({ type: RECOMMENDATIONS_NATURAL_PEOPLE_SET, items: payload });
  };
};
