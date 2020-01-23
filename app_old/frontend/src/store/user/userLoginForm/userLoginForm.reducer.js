import {
  USER_LOGIN_FORM_START_AJAX_REQUEST,
  USER_LOGIN_FORM_FINISH_AJAX_REQUEST,
  USER_LOGIN_FORM_RESET_FIELDS,
  USER_LOGIN_FORM_SET_FIELD
} from './userLoginForm.constants';

const initialState = {
  isAjaxRequestInProgress: false,
  email: '',
  password: ''
};

export const userLoginFormReducer = (
  state = initialState,
  { type, what, value }
) => {
  switch (type) {
    case USER_LOGIN_FORM_START_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: true
      };
    case USER_LOGIN_FORM_FINISH_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: false
      };
    case USER_LOGIN_FORM_RESET_FIELDS:
      return {
        ...state,
        email: '',
        password: ''
      };
    case USER_LOGIN_FORM_SET_FIELD:
      return {
        ...state,
        [what]: value
      };
    default:
      return state;
  }
};
