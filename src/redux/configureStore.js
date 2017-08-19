import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas/sagas';

import RootReducer from './index';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(sagas);
  return store;
}
