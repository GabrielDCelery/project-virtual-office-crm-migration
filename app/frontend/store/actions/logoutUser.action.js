import { USER_RESET } from '../constants';
import services from '../../services';
import { EServiceName, EServiceMethod } from '../../common/enums';
const { SERICE_NAME_API } = EServiceName;
const { SERVICE_METHOD_LOGOUT_USER } = EServiceMethod;

export const actionLogoutUser = () => {
  return async dispatch => {
    dispatch({ type: USER_RESET });

    const { success } = await services
      .get(SERICE_NAME_API, SERVICE_METHOD_LOGOUT_USER)
      .execute();

    if (!success) {
      return;
    }
  };
};
