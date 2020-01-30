import {
  RECOMMENDATIONS_COUNTRIES_SET,
  RECOMMENDATIONS_COUNTRIES_RESET,
  RECOMMENDATIONS_COUNTRIES_AJAX_START,
  RECOMMENDATIONS_COUNTRIES_AJAX_FINISH
} from '../../constants';

const initialState = {
  isAjaxInProgress: false,
  items: []
};

export const recommendationsCountries = (
  state = initialState,
  { type, items }
) => {
  switch (type) {
    case RECOMMENDATIONS_COUNTRIES_AJAX_START:
      return {
        ...state,
        isAjaxInProgress: true
      };

    case RECOMMENDATIONS_COUNTRIES_AJAX_FINISH:
      return {
        ...state,
        isAjaxInProgress: false
      };

    case RECOMMENDATIONS_COUNTRIES_RESET:
      return {
        ...state,
        items: []
      };

    case RECOMMENDATIONS_COUNTRIES_SET:
      return {
        ...state,
        items
      };

    default:
      return state;
  }
};
