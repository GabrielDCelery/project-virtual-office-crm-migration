import {
  OPEN_SUCCESS_SNACKBAR,
  OPEN_ERROR_SNACKBAR,
  CLOSE_SNACKBAR
} from '~/store/constants';

const initialState = {
  open: false,
  variant: null,
  message: ''
};

export const snackbarReducer = (state = initialState, { type, message }) => {
  switch (type) {
    case OPEN_SUCCESS_SNACKBAR:
      return {
        ...state,
        ...{
          open: true,
          variant: 'success',
          message: message
        }
      };

    case OPEN_ERROR_SNACKBAR:
      return {
        ...state,
        ...{
          open: true,
          variant: 'error',
          message: message
        }
      };

    case CLOSE_SNACKBAR:
      return {
        ...state,
        ...{
          open: false
        }
      };

    default:
      return state;
  }
};

export default snackbarReducer;
