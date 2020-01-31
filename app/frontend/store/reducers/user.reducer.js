import {
  USER_SET_EMAIL,
  USER_SET_RULES,
  USER_RESET,
  USER_SET_LANGUAGE
} from '../constants';

const initialState = {
  email: null,
  rules: [],
  language: 'hu'
};

export const userReducer = (
  state = initialState,
  { type, email, language, rules }
) => {
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

    case USER_SET_LANGUAGE:
      return {
        ...state,
        language
      };

    case USER_RESET:
      return {
        ...JSON.parse(JSON.stringify(initialState))
      };
    default:
      return state;
  }
};
