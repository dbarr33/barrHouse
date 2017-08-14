import React from 'react';
import ReactDOM from 'react-dom';
import {
  applyMiddleware,
  createStore
} from 'redux'
import rootReducer from './redux/index';
import thunk from 'redux-thunk';
import {
  Provider
} from 'react-redux'

import Root from './root';

import './index.css';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Root store={store}/>
  </Provider>,
  document.getElementById('root')
);
