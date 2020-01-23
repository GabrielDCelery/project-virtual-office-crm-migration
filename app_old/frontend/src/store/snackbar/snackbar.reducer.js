import {
  SNACKBAR_CLOSE,
  SNACKBAR_OPEN_ERROR,
  SNACKBAR_OPEN_SUCCESS
} from './snackbar.constants';

const initialState = {
  message: '',
  open: false,
  variant: null
};

export const snackbarReducer = (state = initialState, { type, message }) => {
  switch (type) {
    case SNACKBAR_OPEN_SUCCESS:
      return {
        ...state,
        ...{
          message: message,
          open: true,
          variant: 'success'
        }
      };

    case SNACKBAR_OPEN_ERROR:
      return {
        ...state,
        ...{
          message: message,
          open: true,
          variant: 'error'
        }
      };

    case SNACKBAR_CLOSE:
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
