import { USER_RESET, USER_SET_EMAIL, USER_SET_RULES } from '../../constants';
import services from '../../../services';
import { EServiceName, EServiceMethod } from '../../../common/enums';
const { SERICE_NAME_API } = EServiceName;
const { SERVICE_METHOD_LOGIN_USER } = EServiceMethod;

export const actionLoginUser = ({ email, password }) => {
  return async dispatch => {
    dispatch({ type: USER_RESET });

    const {
      success,
      //error,
      payload
    } = await services
      .get(SERICE_NAME_API, SERVICE_METHOD_LOGIN_USER)
      .execute({ email, password });

    if (!success) {
      return;
    }

    const { rules } = payload;

    dispatch({ type: USER_SET_EMAIL, email });
    dispatch({ type: USER_SET_RULES, rules });
  };
};
