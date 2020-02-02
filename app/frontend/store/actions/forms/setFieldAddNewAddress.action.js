import { FORM_ADD_NEW_ADDRESS_SET_FIELD } from '~/store/constants';

export const actionSetFieldAddNewAddress = ({ fieldName, fieldValue }) => {
  return async dispatch => {
    dispatch({ type: FORM_ADD_NEW_ADDRESS_SET_FIELD, fieldName, fieldValue });
  };
};
