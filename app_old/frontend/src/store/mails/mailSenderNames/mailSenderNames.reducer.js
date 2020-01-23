import {
  MAIL_SENDER_NAMES_FINISH_AJAX_REQUEST,
  MAIL_SENDER_NAMES_RESET_LIST,
  MAIL_SENDER_NAMES_SET_LIST,
  MAIL_SENDER_NAMES_START_AJAX_REQUEST
} from './mailSenderNames.constants';

const initialState = {
  isAjaxRequestInProgress: false,
  items: []
};

export const mailSenderNamesReducer = (
  state = initialState,
  { type, items }
) => {
  switch (type) {
    case MAIL_SENDER_NAMES_START_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: true
      };
    case MAIL_SENDER_NAMES_FINISH_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: false
      };
    case MAIL_SENDER_NAMES_RESET_LIST:
      return {
        ...state,
        items: []
      };
    case MAIL_SENDER_NAMES_SET_LIST:
      return {
        ...state,
        items
      };
    default:
      return state;
  }
};
