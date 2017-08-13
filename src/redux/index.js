import { combineReducers } from 'redux';

import User from './reducers/user';

const rootReducer = combineReducers({
  user: User
});

export default rootReducer;
