import {
  MAIL_SENDERS_FINISH_AJAX_REQUEST,
  MAIL_SENDERS_RESET_LIST,
  MAIL_SENDERS_SET_LIST,
  MAIL_SENDERS_START_AJAX_REQUEST
} from './mailSenders.constants';

const initialState = {
  isAjaxRequestInProgress: false,
  items: []
};

export const mailSendersReducer = (state = initialState, { type, items }) => {
  switch (type) {
    case MAIL_SENDERS_START_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: true
      };
    case MAIL_SENDERS_FINISH_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: false
      };
    case MAIL_SENDERS_RESET_LIST:
      return {
        ...state,
        items: []
      };
    case MAIL_SENDERS_SET_LIST:
      return {
        ...state,
        items: items
      };
    default:
      return state;
  }
};
