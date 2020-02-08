import {
  FORM_ADD_NEW_NATURAL_PERSON_AJAX_START,
  FORM_ADD_NEW_NATURAL_PERSON_AJAX_FINISH,
  OPEN_SUCCESS_SNACKBAR,
  OPEN_ERROR_SNACKBAR
} from '~/store/constants';
import { EServiceName, EServiceMethod } from '~/common/enums';
const { SERICE_NAME_API } = EServiceName;
const { SERVICE_METHOD_CREATE_NATURAL_PERSON } = EServiceMethod;
import services from '~/services';

export const actionSubmitFormAddNewNaturalPerson = ({
  firstName,
  lastName,
  motherName,
  birthDate,
  identifierDocumentType,
  identifierDocumentNumber,
  permanentAddressId,
  successCallback
}) => {
  return async dispatch => {
    dispatch({ type: FORM_ADD_NEW_NATURAL_PERSON_AJAX_START });

    const { success, error, payload } = await services
      .get(SERICE_NAME_API, SERVICE_METHOD_CREATE_NATURAL_PERSON)
      .execute({
        firstName,
        lastName,
        motherName,
        birthDate,
        identifierDocumentType,
        identifierDocumentNumber,
        permanentAddressId
      });

    dispatch({ type: FORM_ADD_NEW_NATURAL_PERSON_AJAX_FINISH });

    if (!success) {
      dispatch({ type: OPEN_ERROR_SNACKBAR, message: error });
      return;
    }

    dispatch({
      type: OPEN_SUCCESS_SNACKBAR,
      message: 'Natural Person successfully created'
    });

    const { id } = payload;

    successCallback
      ? successCallback({
          id,
          name: `${lastName} ${firstName} (mother: ${motherName})`
        })
      : null;
  };
};
