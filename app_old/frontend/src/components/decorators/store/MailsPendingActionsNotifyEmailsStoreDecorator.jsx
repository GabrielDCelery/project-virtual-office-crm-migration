import React from 'react';
import { connect } from 'react-redux';
import store from 'store';

const {
  actions: {
    actionFindAllMailsPendingActionsNotifyEmails,
    actionPendingActionsSendEmailNotifications
  }
} = store;

const mapStateToProps = state => {
  return {
    stateIsPendingActionsNotifyEmailsAjaxRequestInProgress:
      state.mails.pendingActions.notifyEmails.isAjaxRequestInProgress,
    statePendingActionsNotifyEmails:
      state.mails.pendingActions.notifyEmails.items
  };
};

const mapActionsToProps = {
  actionFindAllMailsPendingActionsNotifyEmails,
  actionPendingActionsSendEmailNotifications
};

export const MailsPendingActionsNotifyEmailsStoreDecorator = ToWrapComponent => {
  return connect(
    mapStateToProps,
    mapActionsToProps
  )(props => <ToWrapComponent {...props} />);
};
