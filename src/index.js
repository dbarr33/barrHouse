
import React from 'react';
import ReactDOM from 'react-dom';

import {
  Provider
} from 'react-redux';

import Root from './root';

import './index.css';

import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Root store={store} />
  </Provider>,
  document.getElementById('root')
);
