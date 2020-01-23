import {
  USER_DATA_SET_EMAIL,
  USER_DATA_SET_RULES,
  USER_DATA_RESET
} from './userData.constants';
//import { SNACKBAR_OPEN_ERROR } from '../../snackbar';
import {
  APP_LOADING_SCREEN_TURN_ON,
  APP_LOADING_SCREEN_TURN_OFF
} from '../../app';
import services from 'services';

export const actionAuthenticateUserByCookie = () => {
  return async dispatch => {
    dispatch({ type: APP_LOADING_SCREEN_TURN_ON });
    dispatch({ type: USER_DATA_RESET });

    const {
      success,
      //errors,
      payload
    } = await services.api.user.authentication.authenticateByCookie();

    if (!success) {
      dispatch({ type: USER_DATA_SET_EMAIL, email: null });
      dispatch({ type: USER_DATA_SET_RULES, rules: [] });
      dispatch({ type: APP_LOADING_SCREEN_TURN_OFF });
      //dispatch({ type: SNACKBAR_OPEN_ERROR, message: errors[0] });
      return;
    }

    const { email, rules } = payload;

    dispatch({ type: USER_DATA_SET_EMAIL, email });
    dispatch({ type: USER_DATA_SET_RULES, rules });
    dispatch({ type: APP_LOADING_SCREEN_TURN_OFF });
  };
};
