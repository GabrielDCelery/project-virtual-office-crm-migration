import {
  APP_LOADING_SCREEN_TURN_ON,
  APP_LOADING_SCREEN_TURN_OFF
} from './app.constants';

const initialState = {
  isLoadingScreenOn: true
};

export const appReducer = (state = initialState, { type }) => {
  switch (type) {
    case APP_LOADING_SCREEN_TURN_ON:
      return {
        ...state,
        isLoadingScreenOn: true
      };
    case APP_LOADING_SCREEN_TURN_OFF:
      return {
        ...state,
        isLoadingScreenOn: false
      };
    default:
      return state;
  }
};
