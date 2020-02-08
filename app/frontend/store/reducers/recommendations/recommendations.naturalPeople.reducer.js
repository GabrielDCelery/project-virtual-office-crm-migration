import {
  RECOMMENDATIONS_NATURAL_PEOPLE_SET,
  RECOMMENDATIONS_NATURAL_PEOPLE_RESET,
  RECOMMENDATIONS_NATURAL_PEOPLE_AJAX_START,
  RECOMMENDATIONS_NATURAL_PEOPLE_AJAX_FINISH
} from '../../constants';

const initialState = {
  isAjaxInProgress: false,
  items: []
};

export const recommendationsNaturalPeople = (
  state = initialState,
  { type, items }
) => {
  switch (type) {
    case RECOMMENDATIONS_NATURAL_PEOPLE_AJAX_START:
      return {
        ...state,
        isAjaxInProgress: true
      };

    case RECOMMENDATIONS_NATURAL_PEOPLE_AJAX_FINISH:
      return {
        ...state,
        isAjaxInProgress: false
      };

    case RECOMMENDATIONS_NATURAL_PEOPLE_RESET:
      return {
        ...state,
        items: []
      };

    case RECOMMENDATIONS_NATURAL_PEOPLE_SET:
      return {
        ...state,
        items
      };

    default:
      return state;
  }
};
