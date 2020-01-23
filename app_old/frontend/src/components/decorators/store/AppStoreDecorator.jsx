import React from 'react';
import { connect } from 'react-redux';
//import store from 'store';

const mapStateToProps = state => {
  return {
    stateIsAppLoadingScreenOn: state.app.isLoadingScreenOn
  };
};

const mapActionsToProps = {};

export const AppStoreDecorator = ToWrapComponent => {
  return connect(
    mapStateToProps,
    mapActionsToProps
  )(props => <ToWrapComponent {...props} />);
};
