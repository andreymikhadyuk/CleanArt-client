import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import servicesReducer from './servicesReducer';
import { reducer as taskReducer } from '../task';

export default combineReducers({
  router: routerReducer,
  services: servicesReducer,
  task: taskReducer,
});
