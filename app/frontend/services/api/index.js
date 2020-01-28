import authenticateUserByCookie from './authenticateUserByCookie';
import loginUser from './loginUser';
import logoutUser from './logoutUser';
import { EServiceMethod } from '../../common/enums';
const {
  SERVICE_METHOD_LOGIN_USER,
  SERVICE_METHOD_LOGOUT_USER,
  SERVICE_METHOD_AUTHENTICATE_USER_BY_COOKIE
} = EServiceMethod;

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
  [SERVICE_METHOD_LOGOUT_USER]: wrapAPICall(logoutUser)
};
