import {
  RECOMMENDATIONS_NATURAL_PEOPLE_SET,
  RECOMMENDATIONS_NATURAL_PEOPLE_RESET,
  RECOMMENDATIONS_NATURAL_PEOPLE_AJAX_START,
  RECOMMENDATIONS_NATURAL_PEOPLE_AJAX_FINISH
} from '../../constants';
import services from '~/services';
import { EServiceName, EServiceMethod } from '~/common/enums';
const { SERICE_NAME_API } = EServiceName;
const { SERVICE_METHOD_GET_FILTERED_NATURAL_PEOPLE } = EServiceMethod;

export const actionRecommendationsGetFilteredNaturalPeople = ({
  filterTerm
}) => {
  return async dispatch => {
    dispatch({ type: RECOMMENDATIONS_NATURAL_PEOPLE_AJAX_START });
    dispatch({ type: RECOMMENDATIONS_NATURAL_PEOPLE_RESET });

    const {
      success,
      //error,
      payload
    } = await services
      .get(SERICE_NAME_API, SERVICE_METHOD_GET_FILTERED_NATURAL_PEOPLE)
      .execute({ filterTerm, limit: 5 });

    dispatch({ type: RECOMMENDATIONS_NATURAL_PEOPLE_AJAX_FINISH });

    if (!success) {
      return;
    }

    dispatch({ type: RECOMMENDATIONS_NATURAL_PEOPLE_SET, items: payload });
  };
};
