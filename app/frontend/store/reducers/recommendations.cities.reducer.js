import {
  RECOMMENDATIONS_CITIES_SET,
  RECOMMENDATIONS_CITIES_RESET,
  RECOMMENDATIONS_CITIES_AJAX_START,
  RECOMMENDATIONS_CITIES_AJAX_FINISH
} from '../constants';

const initialState = {
  isAjaxInProgress: false,
  items: []
};

export const recommendationsCities = (
  state = initialState,
  { type, items }
) => {
  switch (type) {
    case RECOMMENDATIONS_CITIES_AJAX_START:
      return {
        ...state,
        isAjaxInProgress: true
      };

    case RECOMMENDATIONS_CITIES_AJAX_FINISH:
      return {
        ...state,
        isAjaxInProgress: false
      };

    case RECOMMENDATIONS_CITIES_RESET:
      return {
        ...state,
        items: []
      };

    case RECOMMENDATIONS_CITIES_SET:
      return {
        ...state,
        items
      };

    default:
      return state;
  }
};
