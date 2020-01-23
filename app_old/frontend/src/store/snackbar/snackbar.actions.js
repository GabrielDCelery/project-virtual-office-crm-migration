import {
  SNACKBAR_OPEN_SUCCESS,
  SNACKBAR_OPEN_ERROR,
  SNACKBAR_CLOSE
} from './snackbar.constants';

export const actionOpenSuccessSnackBar = message => {
  return async dispatch => {
    dispatch({ type: SNACKBAR_OPEN_SUCCESS, message });
  };
};

export const actionOpenErrorSnackBar = message => {
  return async dispatch => {
    dispatch({ type: SNACKBAR_OPEN_ERROR, message });
  };
};

export const actionCloseSnackBar = () => {
  return async dispatch => {
    dispatch({ type: SNACKBAR_CLOSE });
  };
};
