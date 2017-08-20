
import { SNACKBAR, DISMISS_SNACKBAR } from '../constants/actions';

export function dismissSnackbar() {
  return {
    type: DISMISS_SNACKBAR,
  };
}

export function displaySnackbar(message, type = 'error') {
  return {
    type: SNACKBAR,
    payload: {
      message,
      type,
    },
  };
}
