import { takeLatest } from 'redux-saga/effects';


// Sagas
import { createEmail } from './mailChip.sagas';

export default function* rootSaga() {
  yield [
    takeLatest('CREATE_EMAIL', createEmail),

  ];
}
