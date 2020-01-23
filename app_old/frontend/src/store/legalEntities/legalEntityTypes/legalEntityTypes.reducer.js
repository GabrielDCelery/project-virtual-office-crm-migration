import {
  LEGAL_ENTITY_TYPES_FINISH_AJAX_REQUEST,
  LEGAL_ENTITY_TYPES_RESET_LIST,
  LEGAL_ENTITY_TYPES_SET_LIST,
  LEGAL_ENTITY_TYPES_START_AJAX_REQUEST
} from './legalEntityTypes.constants';

const initialState = {
  isAjaxRequestInProgress: false,
  items: []
};

export const legalEntityTypesReducer = (
  state = initialState,
  { type, items }
) => {
  switch (type) {
    case LEGAL_ENTITY_TYPES_START_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: true
      };
    case LEGAL_ENTITY_TYPES_FINISH_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: false
      };
    case LEGAL_ENTITY_TYPES_RESET_LIST:
      return {
        ...state,
        items: []
      };
    case LEGAL_ENTITY_TYPES_SET_LIST:
      return {
        ...state,
        items
      };
    default:
      return state;
  }
};
