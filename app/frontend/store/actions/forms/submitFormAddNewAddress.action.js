import {
  FORM_ADD_NEW_ADDRESS_AJAX_START,
  FORM_ADD_NEW_ADDRESS_AJAX_FINISH,
  OPEN_SUCCESS_SNACKBAR,
  OPEN_ERROR_SNACKBAR
} from '~/store/constants';
import services from '~/services';

export const actionSubmitFormAddNewAddress = ({
  postcode,
  city,
  street,
  successCallback
}) => {
  return async dispatch => {
    dispatch({ type: FORM_ADD_NEW_ADDRESS_AJAX_START });

    const { success, error, payload } = await services.api.addresses.create({
      postcode,
      city,
      street
    });

    dispatch({ type: FORM_ADD_NEW_ADDRESS_AJAX_FINISH });

    if (!success) {
      dispatch({ type: OPEN_ERROR_SNACKBAR, message: error.message });
      return;
    }

    dispatch({
      type: OPEN_SUCCESS_SNACKBAR,
      message: 'Address successfully created'
    });

    const { id, cityName, countryName, longStreet } = payload;

    successCallback
      ? successCallback({
          id,
          name: `${postcode} ${countryName} ${cityName} ${longStreet}`
        })
      : null;
  };
};
