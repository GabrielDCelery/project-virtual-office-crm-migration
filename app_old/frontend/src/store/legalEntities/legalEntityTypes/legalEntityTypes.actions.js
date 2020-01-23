import {
  LEGAL_ENTITY_TYPES_FINISH_AJAX_REQUEST,
  LEGAL_ENTITY_TYPES_RESET_LIST,
  LEGAL_ENTITY_TYPES_SET_LIST,
  LEGAL_ENTITY_TYPES_START_AJAX_REQUEST
} from './legalEntityTypes.constants';
import { SNACKBAR_OPEN_ERROR } from '../../snackbar';
import services from 'services';

export const actionFindAllLegalEntityTypes = () => {
  return async dispatch => {
    dispatch({ type: LEGAL_ENTITY_TYPES_START_AJAX_REQUEST });
    dispatch({ type: LEGAL_ENTITY_TYPES_RESET_LIST });

    const {
      success,
      errors,
      payload
    } = await services.api.legalEntities.getTypes();

    dispatch({ type: LEGAL_ENTITY_TYPES_FINISH_AJAX_REQUEST });

    if (!success) {
      dispatch({ type: SNACKBAR_OPEN_ERROR, message: errors[0] });
      return;
    }

    dispatch({
      type: LEGAL_ENTITY_TYPES_SET_LIST,
      items: payload
    });
  };
};
