import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import authReducer from './authReducer';

export default combineReducers({
  dashboard: dashboardReducer,
  auth:authReducer
});
