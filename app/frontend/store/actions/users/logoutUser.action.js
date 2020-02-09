import { USER_RESET, OPEN_ERROR_SNACKBAR } from '~/store/constants';
import services from '~/services';

export const actionLogoutUser = () => {
  return async dispatch => {
    dispatch({ type: USER_RESET });

    const { success } = await services.api.users.logout();

    if (!success) {
      dispatch({ type: OPEN_ERROR_SNACKBAR, message: error.message });
      return;
    }
  };
};
