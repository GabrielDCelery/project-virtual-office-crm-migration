import { connect } from 'react-redux';

import { actionCloseSnackBar } from '~/store';

const mapStateToProps = state => {
  return {
    stateSnackBarMessage: state.snackbar.message,
    stateSnackBarOpen: state.snackbar.open,
    stateSnackBarVariant: state.snackbar.variant
  };
};

const mapActionsToProps = { actionCloseSnackBar };

export default function SnackBarStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
