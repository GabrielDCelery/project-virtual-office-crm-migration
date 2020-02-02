import {
  FORM_ADD_NEW_ADDRESS_AJAX_START,
  FORM_ADD_NEW_ADDRESS_AJAX_FINISH,
  FORM_ADD_NEW_ADDRESS_RESET,
  OPEN_SUCCESS_SNACKBAR,
  OPEN_ERROR_SNACKBAR
} from '~/store/constants';
import { EServiceName, EServiceMethod } from '~/common/enums';
const { SERICE_NAME_API } = EServiceName;
const { SERVICE_METHOD_CREATE_ADDRESS } = EServiceMethod;
import services from '~/services';

export const actionSubmitFormAddNewAddress = ({
  postcode,
  city,
  street,
  successCallback
}) => {
  return async dispatch => {
    dispatch({ type: FORM_ADD_NEW_ADDRESS_AJAX_START });

    const { success, error, payload } = await services
      .get(SERICE_NAME_API, SERVICE_METHOD_CREATE_ADDRESS)
      .execute({ postcode, city, street });

    dispatch({ type: FORM_ADD_NEW_ADDRESS_AJAX_FINISH });

    if (!success) {
      dispatch({ type: OPEN_ERROR_SNACKBAR, message: error });
      return;
    }

    dispatch({
      type: OPEN_SUCCESS_SNACKBAR,
      message: 'Address successfully created'
    });
    dispatch({ type: FORM_ADD_NEW_ADDRESS_RESET });

    const { id, cityName, countryName, longStreet } = payload;

    successCallback
      ? successCallback({
          id,
          name: `${postcode} ${countryName} ${cityName} ${longStreet}`
        })
      : null;
  };
};
