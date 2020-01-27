import { USER_SET_EMAIL, USER_SET_RULES, USER_RESET } from '../constants';

const initialState = {
  email: null,
  rules: []
};

export const userReducer = (state = initialState, { type, email, rules }) => {
  switch (type) {
    case USER_SET_EMAIL:
      return {
        ...state,
        email
      };
    case USER_SET_RULES:
      return {
        ...state,
        rules: [...rules]
      };
    case USER_RESET:
      return {
        ...JSON.parse(JSON.stringify(initialState))
      };
    default:
      return state;
  }
};
