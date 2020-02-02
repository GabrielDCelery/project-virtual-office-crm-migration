import { EServiceMethod } from '../../common/enums';
const {
  SERVICE_METHOD_LOGIN_USER,
  SERVICE_METHOD_LOGOUT_USER,
  SERVICE_METHOD_AUTHENTICATE_USER_BY_COOKIE,
  /*
  SERVICE_METHOD_GET_ALL_ADDRESSES,
  SERVICE_METHOD_GET_ALL_COUNTRIES,
  SERVICE_METHOD_GET_ALL_CITIES,
  */
  SERVICE_METHOD_GET_FILTERED_COUNTRIES,
  SERVICE_METHOD_GET_FILTERED_ADDRESSES,
  SERVICE_METHOD_GET_FILTERED_CITIES,
  SERVICE_METHOD_CREATE_ADDRESS
} = EServiceMethod;
import authenticateUserByCookie from './authenticateUserByCookie';
import loginUser from './loginUser';
import logoutUser from './logoutUser';
/*
import getAllAddresses from './getAllAddresses';
import getAllCities from './getAllCities';
import getAllCountries from './getAllCountries';
*/
import getFilteredCountries from './getFilteredCountries';
import getFilteredAddresses from './getFilteredAddresses';
import getFilteredCities from './getFilteredCities';
import createAddress from './createAddress';

const wrapAPICall = method => {
  return async argsObj => {
    try {
      return {
        success: true,
        error: null,
        payload: await method(argsObj)
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        payload: null
      };
    }
  };
};

export default {
  [SERVICE_METHOD_AUTHENTICATE_USER_BY_COOKIE]: wrapAPICall(
    authenticateUserByCookie
  ),
  [SERVICE_METHOD_LOGIN_USER]: wrapAPICall(loginUser),
  [SERVICE_METHOD_LOGOUT_USER]: wrapAPICall(logoutUser),
  /*
  [SERVICE_METHOD_GET_ALL_ADDRESSES]: wrapAPICall(getAllAddresses),
  [SERVICE_METHOD_GET_ALL_COUNTRIES]: wrapAPICall(getAllCountries),
  [SERVICE_METHOD_GET_ALL_CITIES]: wrapAPICall(getAllCities),
  */
  [SERVICE_METHOD_GET_FILTERED_COUNTRIES]: wrapAPICall(getFilteredCountries),
  [SERVICE_METHOD_GET_FILTERED_ADDRESSES]: wrapAPICall(getFilteredAddresses),
  [SERVICE_METHOD_GET_FILTERED_CITIES]: wrapAPICall(getFilteredCities),
  [SERVICE_METHOD_CREATE_ADDRESS]: wrapAPICall(createAddress)
};
