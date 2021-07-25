import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { tableReducer } from './tableReducer';

const rootReducer = combineReducers({
  users: userReducer,
  columns: tableReducer,
});

export default rootReducer;
