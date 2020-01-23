import React from 'react';
import { connect } from 'react-redux';
import store from 'store';

const {
  actions: { actionLogin, actionLogout, actionSetUserLoginFormField },
  selectors: { selectorUserLoginFormFieldFactory }
} = store;

const mapStateToProps = state => {
  return {
    stateIsUserLoginAjaxRequestInProgress:
      state.user.login.isAjaxRequestInProgress,
    stateUserLoginFormFieldGetter: selectorUserLoginFormFieldFactory(state)
  };
};

const mapActionsToProps = {
  actionLogin,
  actionLogout,
  actionSetUserLoginFormField
};

export const UserLoginFormStoreDecorator = ToWrapComponent => {
  return connect(
    mapStateToProps,
    mapActionsToProps
  )(props => <ToWrapComponent {...props} />);
};
