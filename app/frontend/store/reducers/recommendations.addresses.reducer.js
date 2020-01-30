import {
  RECOMMENDATIONS_ADDRESSES_SET,
  RECOMMENDATIONS_ADDRESSES_RESET,
  RECOMMENDATIONS_ADDRESSES_AJAX_START,
  RECOMMENDATIONS_ADDRESSES_AJAX_FINISH
} from '../constants';

const initialState = {
  isAjaxInProgress: false,
  items: []
};

export const recommendationsAddresses = (
  state = initialState,
  { type, items }
) => {
  switch (type) {
    case RECOMMENDATIONS_ADDRESSES_AJAX_START:
      return {
        ...state,
        isAjaxInProgress: true
      };

    case RECOMMENDATIONS_ADDRESSES_AJAX_FINISH:
      return {
        ...state,
        isAjaxInProgress: false
      };

    case RECOMMENDATIONS_ADDRESSES_RESET:
      return {
        ...state,
        items: []
      };

    case RECOMMENDATIONS_ADDRESSES_SET:
      return {
        ...state,
        items
      };

    default:
      return state;
  }
};
