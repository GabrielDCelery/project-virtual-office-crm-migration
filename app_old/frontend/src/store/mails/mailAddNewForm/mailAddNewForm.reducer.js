import {
  MAIL_ADD_NEW_FORM_START_AJAX_REQUEST,
  MAIL_ADD_NEW_FORM_FINISH_AJAX_REQUEST,
  MAIL_ADD_NEW_FORM_RESET_FIELDS,
  MAIL_ADD_NEW_FORM_SET_FIELD
} from './mailAddNewForm.constants';
import moment from 'moment';

const initialState = {
  isAjaxRequestInProgress: false,
  receiver: null,
  existingSender: null,
  newSenderCity: null,
  newSenderCountry: null,
  newSenderName: null,
  newSenderPostcode: '',
  newSenderStreet: '',
  documentReceivedDate: moment(new Date()).format('YYYY-MM-DD'),
  documentSubject: null,
  documentFile: null
};

export const mailAddNewFormReducer = (
  state = initialState,
  { type, what, value }
) => {
  switch (type) {
    case MAIL_ADD_NEW_FORM_START_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: true
      };
    case MAIL_ADD_NEW_FORM_FINISH_AJAX_REQUEST:
      return {
        ...state,
        isAjaxRequestInProgress: false
      };
    case MAIL_ADD_NEW_FORM_RESET_FIELDS:
      return {
        ...state,
        receiver: null,
        existingSender: null,
        newSenderCity: null,
        newSenderCountry: null,
        newSenderName: null,
        newSenderPostcode: '',
        newSenderStreet: '',
        documentReceivedDate: moment(new Date()).format('YYYY-MM-DD'),
        documentSubject: null,
        documentFile: null
      };
    case MAIL_ADD_NEW_FORM_SET_FIELD:
      return {
        ...state,
        [what]: value
      };
    default:
      return state;
  }
};
