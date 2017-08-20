import { takeLatest } from 'redux-saga/effects';

// Constants
import { CREATE_EMAIL } from '../../constants/actions';

// Sagas
import { createEmail } from './mailChip.sagas';

export default function* rootSaga() {
  yield [
    takeLatest(CREATE_EMAIL, createEmail),

  ];
}
