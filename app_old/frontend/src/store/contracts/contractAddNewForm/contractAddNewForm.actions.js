import {
  CONTRACT_ADD_NEW_FORM_START_AJAX_REQUEST,
  CONTRACT_ADD_NEW_FORM_FINISH_AJAX_REQUEST,
  CONTRACT_ADD_NEW_FORM_RESET_FIELDS,
  CONTRACT_ADD_NEW_FORM_SET_FIELD
} from './contractAddNewForm.constants';
import { SNACKBAR_OPEN_SUCCESS, SNACKBAR_OPEN_ERROR } from '../../snackbar';
import services from 'services';

export const actionSetAddNewContractFormField = ({ what, value }) => {
  return async dispatch => {
    dispatch({ type: CONTRACT_ADD_NEW_FORM_SET_FIELD, what, value });
  };
};

export const actionSubmitAddNewContractForm = formData => {
  return async dispatch => {
    dispatch({ type: CONTRACT_ADD_NEW_FORM_START_AJAX_REQUEST });

    const { success, errors } = await services.api.mails.create(formData);

    dispatch({ type: CONTRACT_ADD_NEW_FORM_FINISH_AJAX_REQUEST });

    if (!success) {
      dispatch({ type: SNACKBAR_OPEN_ERROR, message: errors[0] });
      return;
    }

    dispatch({ type: CONTRACT_ADD_NEW_FORM_RESET_FIELDS });
    dispatch({
      type: SNACKBAR_OPEN_SUCCESS,
      message: 'Contract successfully created!'
    });
  };
};
