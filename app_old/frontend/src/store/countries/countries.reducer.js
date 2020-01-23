import {
  COUNTRIES_FINISH_AJAX_REQUEST,
  COUNTRIES_RESET_LIST,
  COUNTRIES_SET_LIST,
  COUNTRIES_START_AJAX_REQUEST
} from './countries.constants';

const initialState = {
  isAjaxRequestInProgress: false,
  items: []
};

export const countriesReducer = (state = initialState, { type, items }) => {
  switch (type) {
    case COUNTRIES_START_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: true
      };
    case COUNTRIES_FINISH_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: false
      };
    case COUNTRIES_RESET_LIST:
      return {
        ...state,
        items: []
      };
    case COUNTRIES_SET_LIST:
      return {
        ...state,
        items: items
      };
    default:
      return state;
  }
};
