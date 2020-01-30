import {
  FORM_ADD_NEW_ADDRESS_SET_FIELD,
  FORM_ADD_NEW_ADDRESS_RESET
} from '../../constants';

const initialState = {
  postcode: '',
  country: '',
  city: '',
  street: ''
};

export const formAddNewAddressReducer = (
  state = initialState,
  { type, fieldName, fieldValue }
) => {
  switch (type) {
    case FORM_ADD_NEW_ADDRESS_SET_FIELD:
      return {
        ...state,
        [fieldName]: fieldValue
      };

    case FORM_ADD_NEW_ADDRESS_RESET:
      return JSON.parse(JSON.stringify(initialState));

    default:
      return state;
  }
};
