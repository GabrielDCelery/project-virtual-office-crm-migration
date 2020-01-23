import React from 'react';
import { connect } from 'react-redux';
import store from 'store';

const {
  selectors: {
    selectorGetMailSenderNameRecommendations,
    selectorGetMailSenderRecommendations,
    selectorGetMailSubjectRecommendations
  },
  actions: {
    actionCreateNewMailSenderNameAndReFetch,
    actionCreateNewMailSubjectAndReFetch,
    actionFindAllMailSenderNames,
    actionFindAllMailSenders,
    actionFindAllMailSubjects
  }
} = store;

const mapStateToProps = state => {
  return {
    stateIsCreateNewMailAjaxRequestInProgress:
      state.mails.addNewForm.isAjaxRequestInProgress,
    stateIsMailSendersAjaxRequestInProgress:
      state.mails.senders.isAjaxRequestInProgress,
    stateIsMailSenderNamesAjaxRequestInProgress:
      state.mails.senderNames.isAjaxRequestInProgress,
    stateIsFetchingMailSubjects: state.mails.subjects.isAjaxRequestInProgress,
    stateMailSenderRecommendations: selectorGetMailSenderRecommendations(state),
    stateMailSenderNameRecommendations: selectorGetMailSenderNameRecommendations(
      state
    ),
    stateMailSubjectRecommendations: selectorGetMailSubjectRecommendations(
      state
    )
  };
};

const mapActionsToProps = {
  actionCreateNewMailSenderNameAndReFetch,
  actionCreateNewMailSubjectAndReFetch,
  actionFindAllMailSenderNames,
  actionFindAllMailSenders,
  actionFindAllMailSubjects
};

export const MailsStoreDecorator = ToWrapComponent => {
  return connect(
    mapStateToProps,
    mapActionsToProps
  )(props => <ToWrapComponent {...props} />);
};
