import React from 'react';
import { connect } from 'react-redux';
import store from 'store';

const {
  actions: { actionSetAddNewMailFormField, actionSubmitAddNewMailForm },
  selectors: { selectorAddNewMailFormFieldFactory }
} = store;

const mapStateToProps = state => {
  return {
    stateIsCreateNewMailAjaxRequestInProgress:
      state.mails.addNewForm.isAjaxRequestInProgress,
    stateAddNewMailFormFieldGetter: selectorAddNewMailFormFieldFactory(state)
  };
};

const mapActionsToProps = {
  actionSetAddNewMailFormField,
  actionSubmitAddNewMailForm
};

export const MailsAddNewFormStoreDecorator = ToWrapComponent => {
  return connect(
    mapStateToProps,
    mapActionsToProps
  )(props => <ToWrapComponent {...props} />);
};
