import {
  COUNTRIES_FINISH_AJAX_REQUEST,
  COUNTRIES_RESET_LIST,
  COUNTRIES_SET_LIST,
  COUNTRIES_START_AJAX_REQUEST
} from './countries.constants';
import { SNACKBAR_OPEN_ERROR } from '../snackbar';
import services from 'services';

export const actionFindAllCountries = () => {
  return async dispatch => {
    dispatch({ type: COUNTRIES_START_AJAX_REQUEST });
    dispatch({ type: COUNTRIES_RESET_LIST });

    const { success, errors, payload } = await services.api.countries.findAll();

    dispatch({ type: COUNTRIES_FINISH_AJAX_REQUEST });

    if (!success) {
      dispatch({ type: SNACKBAR_OPEN_ERROR, message: errors[0] });
      return;
    }

    dispatch({
      type: COUNTRIES_SET_LIST,
      items: payload
    });
  };
};
