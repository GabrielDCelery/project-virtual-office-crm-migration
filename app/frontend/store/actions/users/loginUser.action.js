import {
  USER_RESET,
  USER_SET_EMAIL,
  USER_SET_RULES,
  OPEN_ERROR_SNACKBAR
} from '~/store/constants';
import services from '~/services';

export const actionLoginUser = ({ email, password }) => {
  return async dispatch => {
    dispatch({ type: USER_RESET });

    const { success, error, payload } = await services.api.users.login({
      email,
      password
    });

    if (!success) {
      dispatch({ type: OPEN_ERROR_SNACKBAR, message: error.message });
      return;
    }

    const { rules } = payload;

    dispatch({ type: USER_SET_EMAIL, email });
    dispatch({ type: USER_SET_RULES, rules });
  };
};
