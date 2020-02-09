import {
  RECOMMENDATIONS_LEGAL_ENTITIES_SET,
  RECOMMENDATIONS_LEGAL_ENTITIES_RESET,
  RECOMMENDATIONS_LEGAL_ENTITIES_AJAX_START,
  RECOMMENDATIONS_LEGAL_ENTITIES_AJAX_FINISH
} from '../../constants';

const initialState = {
  isAjaxInProgress: false,
  items: []
};

export const recommendationsLegalEntities = (
  state = initialState,
  { type, items }
) => {
  switch (type) {
    case RECOMMENDATIONS_LEGAL_ENTITIES_AJAX_START:
      return {
        ...state,
        isAjaxInProgress: true
      };

    case RECOMMENDATIONS_LEGAL_ENTITIES_AJAX_FINISH:
      return {
        ...state,
        isAjaxInProgress: false
      };

    case RECOMMENDATIONS_LEGAL_ENTITIES_RESET:
      return {
        ...state,
        items: []
      };

    case RECOMMENDATIONS_LEGAL_ENTITIES_SET:
      return {
        ...state,
        items
      };

    default:
      return state;
  }
};
