import React from 'react';
import { connect } from 'react-redux';
import store from 'store';

const {
  actionCloseSnackBar,
  actionOpenSuccessSnackBar,
  actionOpenErrorSnackBar
} = store.actions;

const mapStateToProps = state => {
  return {
    stateSnackBarMessage: state.snackbar.message,
    stateSnackBarOpen: state.snackbar.open,
    stateSnackBarVariant: state.snackbar.variant
  };
};

const mapActionsToProps = {
  actionCloseSnackBar,
  actionOpenSuccessSnackBar,
  actionOpenErrorSnackBar
};

export const SnackBarStoreDecorator = ToWrapComponent => {
  return connect(
    mapStateToProps,
    mapActionsToProps
  )(props => <ToWrapComponent {...props} />);
};
