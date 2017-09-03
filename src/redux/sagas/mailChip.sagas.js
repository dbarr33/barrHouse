
import { put } from 'redux-saga/effects';

// Services
import { postEmail } from '../../services/mailchip';
import { request } from '../../services/request';

// Constants
import { END_EMAIL } from '../../constants/actions';

// Actions
import { displaySnackbar } from '../../actions/notifications.actions';

export function* createEmail(action) {
  try {
    yield request(postEmail(action.payload));
    yield put(displaySnackbar('Reservation Sent'));
    yield put({ type: END_EMAIL });
  } catch (error) {
    yield put(displaySnackbar('Reservation Sent'));
    yield put({ type: END_EMAIL });
  }
}
