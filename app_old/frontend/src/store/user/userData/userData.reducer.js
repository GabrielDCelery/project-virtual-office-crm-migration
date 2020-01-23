import {
  USER_DATA_SET_EMAIL,
  USER_DATA_SET_RULES,
  USER_DATA_RESET
} from './userData.constants';

const initialState = {
  email: null,
  rules: []
};

export const userDataReducer = (
  state = initialState,
  { type, email, rules }
) => {
  switch (type) {
    case USER_DATA_SET_EMAIL:
      return {
        ...state,
        email
      };
    case USER_DATA_SET_RULES:
      return {
        ...state,
        rules: [...rules]
      };
    case USER_DATA_RESET:
      return {
        ...JSON.parse(JSON.stringify(initialState))
      };
    default:
      return state;
  }
};
