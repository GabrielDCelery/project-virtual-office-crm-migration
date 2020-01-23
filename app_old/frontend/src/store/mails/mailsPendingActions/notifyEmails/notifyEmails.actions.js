import {
  MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_START_AJAX_REQUEST,
  MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_SET_LIST,
  MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_RESET_LIST,
  MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_FINISH_AJAX_REQUEST
} from './notifyEmails.constants';
import { SNACKBAR_OPEN_SUCCESS, SNACKBAR_OPEN_ERROR } from '../../../snackbar';
import services from 'services';

export const actionFindAllMailsPendingActionsNotifyEmails = () => {
  return async dispatch => {
    dispatch({ type: MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_START_AJAX_REQUEST });
    dispatch({ type: MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_RESET_LIST });

    const {
      success,
      errors,
      payload
    } = await services.api.mailsPendingActions.findAllPendingEmailNotifications();

    dispatch({ type: MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_FINISH_AJAX_REQUEST });

    if (!success) {
      dispatch({ type: SNACKBAR_OPEN_ERROR, message: errors[0] });
      return;
    }

    dispatch({
      type: MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_SET_LIST,
      items: payload
    });
  };
};

export const actionPendingActionsSendEmailNotifications = ({ ids }) => {
  return async dispatch => {
    dispatch({ type: MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_START_AJAX_REQUEST });
    dispatch({ type: MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_RESET_LIST });

    const updateResult = await services.api.mailsPendingActions.sendEmailNotificationsForReceivedMails(
      {
        ids
      }
    );

    if (!updateResult.success) {
      dispatch({ type: SNACKBAR_OPEN_ERROR, message: updateResult.errors[0] });
      return;
    }

    const findAllResult = await services.api.mailsPendingActions.findAllPendingEmailNotifications();

    dispatch({ type: MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_FINISH_AJAX_REQUEST });

    if (!findAllResult.success) {
      dispatch({ type: SNACKBAR_OPEN_ERROR, message: findAllResult.errors[0] });
      return;
    }

    dispatch({
      type: MAILS_PENDING_ACTIONS_NOTIFY_EMAILS_SET_LIST,
      items: findAllResult.payload
    });

    dispatch({
      type: SNACKBAR_OPEN_SUCCESS,
      message: 'Notifications successfully queued!'
    });
  };
};
