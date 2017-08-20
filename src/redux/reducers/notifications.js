
import {
  SNACKBAR,
  DISMISS_SNACKBAR,
} from '../../constants/actions';

const initialState = {
  sidebar: {
    open: true,
  },
  modal: {
    open: false,
  },
  snackbar: {
    display: false,
    message: '',
    type: '',
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SNACKBAR:
      return {
        ...state,
        snackbar: {
          display: true,
          message: action.payload.message,
          type: action.payload.type,
        }
      };
    case DISMISS_SNACKBAR:
      return {
        ...state,
        snackbar: {
          display: false,
          message: '',
        }
      };
    default:
      return state;
  }
}
