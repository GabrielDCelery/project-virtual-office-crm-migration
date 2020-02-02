import {
  FORM_ADD_NEW_NATURAL_PERSON_SET_FIELD,
  FORM_ADD_NEW_NATURAL_PERSON_RESET,
  FORM_ADD_NEW_NATURAL_PERSON_AJAX_START,
  FORM_ADD_NEW_NATURAL_PERSON_AJAX_FINISH
} from '../../constants';

const initialState = {
  isAjaxInProgress: false,
  firstName: '',
  lastName: '',
  motherName: '',
  birthDate: '',
  permanentAddress: null
};

export const formAddNewNaturalPersonReducer = (
  state = initialState,
  { type, fieldName, fieldValue }
) => {
  switch (type) {
    case FORM_ADD_NEW_NATURAL_PERSON_AJAX_START:
      return {
        ...state,
        isAjaxInProgress: true
      };

    case FORM_ADD_NEW_NATURAL_PERSON_AJAX_FINISH:
      return {
        ...state,
        isAjaxInProgress: false
      };

    case FORM_ADD_NEW_NATURAL_PERSON_SET_FIELD:
      return {
        ...state,
        [fieldName]: fieldValue
      };

    case FORM_ADD_NEW_NATURAL_PERSON_RESET:
      return JSON.parse(JSON.stringify(initialState));

    default:
      return state;
  }
};
