// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import userReducer from './userReducer';

export default combineReducers({
  courses: courseReducer,
  user: userReducer,
});
