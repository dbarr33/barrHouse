import { combineReducers } from 'redux';

import User from './reducers/user';
import Notifications from './reducers/notifications';

const rootReducer = combineReducers({
  user: User,
  notifications: Notifications
});

export default rootReducer;
