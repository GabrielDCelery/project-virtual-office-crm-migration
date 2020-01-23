import {
  MAIL_SUBJECTS_START_AJAX_REQUEST,
  MAIL_SUBJECTS_FINISH_AJAX_REQUEST,
  MAIL_SUBJECTS_RESET_LIST,
  MAIL_SUBJECTS_SET_LIST
} from './mailSubjects.constants';
import { MAIL_ADD_NEW_FORM_SET_FIELD } from '../mailAddNewForm';
import { SNACKBAR_OPEN_ERROR } from '../../snackbar';
import services from 'services';

export const actionFindAllMailSubjects = () => {
  return async dispatch => {
    dispatch({ type: MAIL_SUBJECTS_START_AJAX_REQUEST });
    dispatch({ type: MAIL_SUBJECTS_RESET_LIST });

    const {
      success,
      errors,
      payload
    } = await services.api.mailSubjects.findAll();

    dispatch({ type: MAIL_SUBJECTS_FINISH_AJAX_REQUEST });

    if (!success) {
      dispatch({ type: SNACKBAR_OPEN_ERROR, message: errors[0] });
      return;
    }

    dispatch({ type: MAIL_SUBJECTS_SET_LIST, items: payload });
  };
};

export const actionCreateNewMailSubjectAndReFetch = mailSubject => {
  return async dispatch => {
    dispatch({ type: MAIL_SUBJECTS_START_AJAX_REQUEST });
    dispatch({ type: MAIL_SUBJECTS_RESET_LIST });

    const createResult = await services.api.mailSubjects.create({
      longSubject: mailSubject
    });

    if (!createResult.success) {
      dispatch({ type: SNACKBAR_OPEN_ERROR, message: createResult.errors[0] });
      dispatch({ type: MAIL_SUBJECTS_FINISH_AJAX_REQUEST });
      return;
    }

    const findAllResult = await services.api.mailSubjects.findAll();

    if (!findAllResult.success) {
      dispatch({ type: SNACKBAR_OPEN_ERROR, message: findAllResult.errors[0] });
      dispatch({ type: MAIL_SUBJECTS_FINISH_AJAX_REQUEST });
      return;
    }

    dispatch({ type: MAIL_SUBJECTS_FINISH_AJAX_REQUEST });
    dispatch({
      type: MAIL_SUBJECTS_SET_LIST,
      items: findAllResult.payload
    });
    dispatch({
      type: MAIL_ADD_NEW_FORM_SET_FIELD,
      what: 'documentSubject',
      value: {
        value: createResult.payload.id,
        label: createResult.payload.longSubject
      }
    });
  };
};
