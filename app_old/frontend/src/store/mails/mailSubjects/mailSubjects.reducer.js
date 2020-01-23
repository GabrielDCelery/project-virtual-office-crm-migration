import {
  MAIL_SUBJECTS_START_AJAX_REQUEST,
  MAIL_SUBJECTS_FINISH_AJAX_REQUEST,
  MAIL_SUBJECTS_RESET_LIST,
  MAIL_SUBJECTS_SET_LIST
} from './mailSubjects.constants';

const initialState = {
  isAjaxRequestInProgress: false,
  items: []
};

export const mailSubjectsReducer = (state = initialState, { type, items }) => {
  switch (type) {
    case MAIL_SUBJECTS_START_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: true
      };
    case MAIL_SUBJECTS_FINISH_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: false
      };
    case MAIL_SUBJECTS_RESET_LIST:
      return {
        ...state,
        items: []
      };
    case MAIL_SUBJECTS_SET_LIST:
      return {
        ...state,
        items: items
      };
    default:
      return state;
  }
};
