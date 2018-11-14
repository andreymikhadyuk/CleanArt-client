import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import servicesReducer from './servicesReducer';

export default combineReducers({
  router: routerReducer,
  services: servicesReducer,
});
