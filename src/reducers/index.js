import { combineReducers } from 'redux';

import authReducer from './authReducer';
import shownews from './shownews';


export default combineReducers({
  auth: authReducer,
  show:shownews
 });