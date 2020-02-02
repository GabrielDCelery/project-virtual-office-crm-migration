import { FORM_ADD_NEW_NATURAL_PERSON_SET_FIELD } from '~/store/constants';

export const actionSetFieldAddNewNaturalPerson = ({
  fieldName,
  fieldValue
}) => {
  return async dispatch => {
    dispatch({
      type: FORM_ADD_NEW_NATURAL_PERSON_SET_FIELD,
      fieldName,
      fieldValue
    });
  };
};
