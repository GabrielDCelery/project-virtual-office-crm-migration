import {
  RECOMMENDATIONS_ADDRESSES_SET,
  RECOMMENDATIONS_ADDRESSES_RESET,
  RECOMMENDATIONS_ADDRESSES_AJAX_START,
  RECOMMENDATIONS_ADDRESSES_AJAX_FINISH
} from '~/store/constants';
import services from '~/services';
import { EServiceName, EServiceMethod } from '~/common/enums';
const { SERICE_NAME_API } = EServiceName;
const { SERVICE_METHOD_GET_FILTERED_ADDRESSES } = EServiceMethod;

export const actionRecommendationsGetFilteredAddresses = ({ filterTerm }) => {
  return async dispatch => {
    dispatch({ type: RECOMMENDATIONS_ADDRESSES_AJAX_START });
    dispatch({ type: RECOMMENDATIONS_ADDRESSES_RESET });

    const {
      success,
      //error,
      payload
    } = await services
      .get(SERICE_NAME_API, SERVICE_METHOD_GET_FILTERED_ADDRESSES)
      .execute({ filterTerm });

    dispatch({ type: RECOMMENDATIONS_ADDRESSES_AJAX_FINISH });

    if (!success) {
      return;
    }

    dispatch({ type: RECOMMENDATIONS_ADDRESSES_SET, items: payload });
  };
};
