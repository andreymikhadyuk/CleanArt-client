import { MINSK_CITY_OPTION_VALUE } from 'consts';
import { selectServiceReducer, cleanSelectedServiceReducer } from './serviceSelectionReducer';
import updateDetailsReducer from './updateDetailsReducer';
import updateAddressReducer from './updateAddressReducer';
import {
  TASK_CLEAN_SELECTED_SERVICE,
  TASK_SELECT_SERVICE,
  TASK_UPDATE_DETAILS,
  TASK_UPDATE_ADDRESS,
} from '../actions/actionTypes';

const initialState = {
  serviceSelection: {
    isCompleted: false,
    serviceId: null,
  },
  details: {
    taskName: '',
    taskDescription: '',
    confidentialData: '',
  },
  address: {
    city: MINSK_CITY_OPTION_VALUE,
    street: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TASK_SELECT_SERVICE:
      return selectServiceReducer(state, action);
    case TASK_CLEAN_SELECTED_SERVICE:
      return cleanSelectedServiceReducer(state, action);
    case TASK_UPDATE_DETAILS:
      return updateDetailsReducer(state, action);
    case TASK_UPDATE_ADDRESS:
      return updateAddressReducer(state, action);
    default:
      return state;
  }
};
