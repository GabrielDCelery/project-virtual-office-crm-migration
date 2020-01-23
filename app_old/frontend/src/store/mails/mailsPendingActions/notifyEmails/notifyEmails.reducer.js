import {
  MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_START_AJAX_REQUEST,
  MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_SET_LIST,
  MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_RESET_LIST,
  MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_FINISH_AJAX_REQUEST
} from './notifyEmails.constants';

const initialState = {
  isAjaxRequestInProgress: false,
  items: []
};

export const mailsPendingActionsNotifyEmailsReducer = (
  state = initialState,
  { type, items }
) => {
  switch (type) {
    case MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_START_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: true
      };
    case MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_FINISH_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: false
      };
    case MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_RESET_LIST:
      return {
        ...state,
        items: []
      };
    case MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_SET_LIST:
      return {
        ...state,
        items: items
      };
    default:
      return state;
  }
};
