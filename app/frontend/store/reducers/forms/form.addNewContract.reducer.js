import {
  FORM_ADD_NEW_CONTRACT_SET_FIELD,
  FORM_ADD_NEW_CONTRACT_RESET,
  FORM_ADD_NEW_CONTRACT_AJAX_START,
  FORM_ADD_NEW_CONTRACT_AJAX_FINISH
} from '~/store/constants';
import services from '~/services';

const initialState = {
  isAjaxInProgress: false,
  clientLongName: '',
  clientShortName: '',
  clientType: '',
  clientRegistrationId: '',
  clientTaxId: '',
  clientAddress: null,
  clientSignatory: null,
  clientSignatoryType: '',
  serviceProvider: null,
  contractStartDate: services.transformations.date.convertDateObjToFieldCompatible(
    new Date()
  ),
  contractEndDate: '',
  contractRenewalPeriod: '',
  contractRenewalFeeMonthly: ''
};

export const formAddNewContractReducer = (
  state = initialState,
  { type, fieldName, fieldValue }
) => {
  switch (type) {
    case FORM_ADD_NEW_CONTRACT_AJAX_START:
      return {
        ...state,
        isAjaxInProgress: true
      };

    case FORM_ADD_NEW_CONTRACT_AJAX_FINISH:
      return {
        ...state,
        isAjaxInProgress: false
      };

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
