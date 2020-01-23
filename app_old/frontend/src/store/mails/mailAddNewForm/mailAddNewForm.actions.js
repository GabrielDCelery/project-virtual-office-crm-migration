import {
  MAIL_ADD_NEW_FORM_START_AJAX_REQUEST,
  MAIL_ADD_NEW_FORM_FINISH_AJAX_REQUEST,
  MAIL_ADD_NEW_FORM_RESET_FIELDS,
  MAIL_ADD_NEW_FORM_SET_FIELD
} from './mailAddNewForm.constants';
import { SNACKBAR_OPEN_SUCCESS, SNACKBAR_OPEN_ERROR } from '../../snackbar';
import services from 'services';

export const actionSetAddNewMailFormField = ({ what, value }) => {
  return async dispatch => {
    dispatch({ type: MAIL_ADD_NEW_FORM_SET_FIELD, what, value });
  };
};

export const actionSubmitAddNewMailForm = formData => {
  return async dispatch => {
    dispatch({ type: MAIL_ADD_NEW_FORM_START_AJAX_REQUEST });

    const { success, errors } = await services.api.mails.create(formData);

    dispatch({ type: MAIL_ADD_NEW_FORM_FINISH_AJAX_REQUEST });

    if (!success) {
      dispatch({ type: SNACKBAR_OPEN_ERROR, message: errors[0] });
      return;
    }

    dispatch({ type: MAIL_ADD_NEW_FORM_RESET_FIELDS });
    dispatch({
      type: SNACKBAR_OPEN_SUCCESS,
      message: 'Mail successfully created!'
    });
  };
};
