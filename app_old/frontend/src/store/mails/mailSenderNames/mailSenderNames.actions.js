import {
  MAIL_SENDER_NAMES_FINISH_AJAX_REQUEST,
  MAIL_SENDER_NAMES_RESET_LIST,
  MAIL_SENDER_NAMES_SET_LIST,
  MAIL_SENDER_NAMES_START_AJAX_REQUEST
} from './mailSenderNames.constants';
import { MAIL_ADD_NEW_FORM_SET_FIELD } from '../mailAddNewForm';
import { SNACKBAR_OPEN_ERROR } from '../../snackbar';
import services from 'services';

export const actionFindAllMailSenderNames = () => {
  return async dispatch => {
    dispatch({ type: MAIL_SENDER_NAMES_START_AJAX_REQUEST });
    dispatch({ type: MAIL_SENDER_NAMES_RESET_LIST });

    const {
      success,
      errors,
      payload
    } = await services.api.mailSenderNames.findAll();

    dispatch({ type: MAIL_SENDER_NAMES_FINISH_AJAX_REQUEST });

    if (!success) {
      dispatch({ type: SNACKBAR_OPEN_ERROR, message: errors[0] });
      return;
    }

    dispatch({
      type: MAIL_SENDER_NAMES_SET_LIST,
      items: payload
    });
  };
};

export const actionCreateNewMailSenderNameAndReFetch = mailSenderName => {
  return async dispatch => {
    dispatch({ type: MAIL_SENDER_NAMES_START_AJAX_REQUEST });
    dispatch({ type: MAIL_SENDER_NAMES_RESET_LIST });

    const createResult = await services.api.mailSenderNames.create({
      name: mailSenderName
    });

    if (!createResult.success) {
      dispatch({ type: MAIL_SENDER_NAMES_FINISH_AJAX_REQUEST });
      dispatch({ type: SNACKBAR_OPEN_ERROR, message: createResult.errors[0] });
      return;
    }

    const findAllResult = await services.api.mailSenderNames.findAll();

    if (!findAllResult.success) {
      dispatch({ type: MAIL_SENDER_NAMES_FINISH_AJAX_REQUEST });
      dispatch({ type: SNACKBAR_OPEN_ERROR, message: findAllResult.errors[0] });
      return;
    }

    dispatch({ type: MAIL_SENDER_NAMES_FINISH_AJAX_REQUEST });
    dispatch({
      type: MAIL_SENDER_NAMES_SET_LIST,
      items: findAllResult.payload
    });
    dispatch({
      type: MAIL_ADD_NEW_FORM_SET_FIELD,
      what: 'newSenderName',
      value: {
        value: createResult.payload.id,
        label: createResult.payload.name
      }
    });
  };
};
