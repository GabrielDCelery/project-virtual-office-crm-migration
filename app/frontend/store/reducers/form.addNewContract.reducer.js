import {
  FORM_ADD_NEW_CONTRACT_SET_FIELD,
  FORM_ADD_NEW_CONTRACT_RESET
} from '../constants';

const initialState = {
  clientLongName: '',
  clientShortName: '',
  clientType: '',
  clientRegistrationId: '',
  clientTaxId: '',
  clientAddressId: null
};

export const formAddNewContractReducer = (
  state = initialState,
  { type, fieldName, fieldValue }
) => {
  switch (type) {
    case FORM_ADD_NEW_CONTRACT_SET_FIELD:
      return {
        ...state,
        [fieldName]: fieldValue
      };

    case FORM_ADD_NEW_CONTRACT_RESET:
      return JSON.parse(JSON.stringify(initialState));

    default:
      return state;
  }
};
