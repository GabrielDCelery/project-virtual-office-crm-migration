import { FORM_ADD_NEW_CONTRACT_SET_FIELD } from '~/store/constants';

export const actionSetFieldAddNewContract = ({ fieldName, fieldValue }) => {
  return async dispatch => {
    dispatch({ type: FORM_ADD_NEW_CONTRACT_SET_FIELD, fieldName, fieldValue });
  };
};
