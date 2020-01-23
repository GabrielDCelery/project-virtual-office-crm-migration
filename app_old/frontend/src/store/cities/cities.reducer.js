import {
  CITIES_FINISH_AJAX_REQUEST,
  CITIES_RESET_LIST,
  CITIES_SET_LIST,
  CITIES_START_AJAX_REQUEST
} from './cities.constants';

const initialState = {
  isAjaxRequestInProgress: false,
  items: []
};

export const citiesReducer = (state = initialState, { type, items }) => {
  switch (type) {
    case CITIES_START_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: true
      };
    case CITIES_FINISH_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: false
      };
    case CITIES_RESET_LIST:
      return {
        ...state,
        items: []
      };
    case CITIES_SET_LIST:
      return {
        ...state,
        items: items
      };
    default:
      return state;
  }
};
