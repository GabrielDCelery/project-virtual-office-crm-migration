import {
  CITIES_FINISH_AJAX_REQUEST,
  CITIES_START_AJAX_REQUEST,
  CITIES_RESET_LIST,
  CITIES_SET_LIST
} from './cities.constants';
import { SNACKBAR_OPEN_ERROR } from '../snackbar';
import services from 'services';

export const actionFindAllCities = () => {
  return async dispatch => {
    dispatch({ type: CITIES_START_AJAX_REQUEST });
    dispatch({ type: CITIES_RESET_LIST });

    const { success, errors, payload } = await services.api.cities.findAll();

    dispatch({ type: CITIES_FINISH_AJAX_REQUEST });

    if (!success) {
      dispatch({ type: SNACKBAR_OPEN_ERROR, message: errors[0] });
      return;
    }

    dispatch({
      type: CITIES_SET_LIST,
      items: payload
    });
  };
};
