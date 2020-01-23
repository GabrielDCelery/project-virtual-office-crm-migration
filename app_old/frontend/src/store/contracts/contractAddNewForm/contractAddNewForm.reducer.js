import {
  CONTRACT_ADD_NEW_FORM_START_AJAX_REQUEST,
  CONTRACT_ADD_NEW_FORM_FINISH_AJAX_REQUEST,
  CONTRACT_ADD_NEW_FORM_RESET_FIELDS,
  CONTRACT_ADD_NEW_FORM_SET_FIELD
} from './contractAddNewForm.constants';
//import moment from 'moment';

const initialState = {
  isAjaxRequestInProgress: false,
  clientName: '',
  clientType: ''
};

export const contractAddNewFormReducer = (
  state = initialState,
  { type, what, value }
) => {
  switch (type) {
    case CONTRACT_ADD_NEW_FORM_START_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: true
      };
    case CONTRACT_ADD_NEW_FORM_FINISH_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: false
      };
    case CONTRACT_ADD_NEW_FORM_RESET_FIELDS:
      return {
        ...state,
        clientName: '',
        clientType: ''
      };
    case CONTRACT_ADD_NEW_FORM_SET_FIELD:
      return {
        ...state,
        [what]: value
      };
    default:
      return state;
  }
};
