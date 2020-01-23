import {
  USER_DATA_SET_EMAIL,
  USER_DATA_SET_RULES,
  USER_DATA_RESET
} from '../userData';
import {
  USER_LOGIN_FORM_START_AJAX_REQUEST,
  USER_LOGIN_FORM_FINISH_AJAX_REQUEST,
  USER_LOGIN_FORM_RESET_FIELDS,
  USER_LOGIN_FORM_SET_FIELD
} from './userLoginForm.constants';
import { SNACKBAR_OPEN_ERROR } from '../../snackbar';
import services from 'services';

export const actionSetUserLoginFormField = ({ what, value }) => {
  return async dispatch => {
    dispatch({ type: USER_LOGIN_FORM_SET_FIELD, what, value });
  };
};

export const actionLogin = (
  { email, password },
  successCallback = () => {}
) => {
  return async dispatch => {
    dispatch({ type: USER_DATA_RESET });
    dispatch({ type: USER_LOGIN_FORM_START_AJAX_REQUEST });

    const {
      success,
      errors,
      payload
    } = await services.api.user.authentication.login({ email, password });

    dispatch({ type: USER_LOGIN_FORM_FINISH_AJAX_REQUEST });

    if (!success) {
      dispatch({ type: SNACKBAR_OPEN_ERROR, message: errors[0] });
      return;
    }

    dispatch({ type: USER_LOGIN_FORM_RESET_FIELDS });
    dispatch({ type: USER_DATA_SET_EMAIL, email: payload['email'] });
    dispatch({ type: USER_DATA_SET_RULES, rules: payload['rules'] });

    return successCallback();
  };
};

export const actionLogout = (successCallback = () => {}) => {
  return async dispatch => {
    dispatch({ type: USER_DATA_RESET });

    const { success, errors } = await services.api.user.authentication.logout();

    if (!success) {
      dispatch({ type: SNACKBAR_OPEN_ERROR, message: errors[0] });
      return;
    }

    return successCallback();
  };
};
