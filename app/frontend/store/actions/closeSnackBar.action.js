import { CLOSE_SNACKBAR } from '../constants';

export const actionCloseSnackBar = () => {
  return async dispatch => {
    dispatch({ type: CLOSE_SNACKBAR });
  };
};

export default actionCloseSnackBar;
