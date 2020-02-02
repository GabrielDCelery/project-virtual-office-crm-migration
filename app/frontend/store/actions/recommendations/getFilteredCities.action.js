import {
  RECOMMENDATIONS_CITIES_SET,
  RECOMMENDATIONS_CITIES_RESET,
  RECOMMENDATIONS_CITIES_AJAX_START,
  RECOMMENDATIONS_CITIES_AJAX_FINISH
} from '../../constants';
import services from '~/services';
import { EServiceName, EServiceMethod } from '~/common/enums';
const { SERICE_NAME_API } = EServiceName;
const { SERVICE_METHOD_GET_FILTERED_CITIES } = EServiceMethod;

export const actionRecommendationsGetFilteredCities = ({ filterTerm }) => {
  return async dispatch => {
    dispatch({ type: RECOMMENDATIONS_CITIES_AJAX_START });
    dispatch({ type: RECOMMENDATIONS_CITIES_RESET });

    const {
      success,
      //error,
      payload
    } = await services
      .get(SERICE_NAME_API, SERVICE_METHOD_GET_FILTERED_CITIES)
      .execute({ filterTerm, limit: 5 });

    dispatch({ type: RECOMMENDATIONS_CITIES_AJAX_FINISH });

    if (!success) {
      return;
    }

    dispatch({ type: RECOMMENDATIONS_CITIES_SET, items: payload });
  };
};
