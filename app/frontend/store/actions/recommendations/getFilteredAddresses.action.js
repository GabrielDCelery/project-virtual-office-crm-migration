import {
  RECOMMENDATIONS_ADDRESSES_SET,
  RECOMMENDATIONS_ADDRESSES_RESET,
  RECOMMENDATIONS_ADDRESSES_AJAX_START,
  RECOMMENDATIONS_ADDRESSES_AJAX_FINISH,
  OPEN_ERROR_SNACKBAR
} from '~/store/constants';
import services from '~/services';

export const actionRecommendationsGetFilteredAddresses = ({ filterTerm }) => {
  return async dispatch => {
    dispatch({ type: RECOMMENDATIONS_ADDRESSES_AJAX_START });
    dispatch({ type: RECOMMENDATIONS_ADDRESSES_RESET });

    const { success, error, payload } = await services.api.addresses.filter({
      filterTerm
    });

    dispatch({ type: RECOMMENDATIONS_ADDRESSES_AJAX_FINISH });

    if (!success) {
      dispatch({ type: OPEN_ERROR_SNACKBAR, message: error.message });
      return;
    }

    dispatch({ type: RECOMMENDATIONS_ADDRESSES_SET, items: payload });
  };
};
