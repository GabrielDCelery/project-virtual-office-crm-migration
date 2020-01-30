import {
  RECOMMENDATIONS_COUNTRIES_SET,
  RECOMMENDATIONS_COUNTRIES_RESET,
  RECOMMENDATIONS_COUNTRIES_AJAX_START,
  RECOMMENDATIONS_COUNTRIES_AJAX_FINISH
} from '../../constants';
import services from '../../../services';
import { EServiceName, EServiceMethod } from '../../../common/enums';
const { SERICE_NAME_API } = EServiceName;
const { SERVICE_METHOD_GET_ALL_COUNTRIES } = EServiceMethod;

export const actionRecommendationsGetAllCountries = () => {
  return async dispatch => {
    dispatch({ type: RECOMMENDATIONS_COUNTRIES_AJAX_START });
    dispatch({ type: RECOMMENDATIONS_COUNTRIES_RESET });

    const {
      success,
      //error,
      payload
    } = await services
      .get(SERICE_NAME_API, SERVICE_METHOD_GET_ALL_COUNTRIES)
      .execute();

    dispatch({ type: RECOMMENDATIONS_COUNTRIES_AJAX_FINISH });

    if (!success) {
      return;
    }

    dispatch({ type: RECOMMENDATIONS_COUNTRIES_SET, items: payload });
  };
};
