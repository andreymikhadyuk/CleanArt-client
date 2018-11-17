import { selectServiceReducer, cleanSelectedServiceReducer } from './serviceSelectionReducer';
import updateDetailsReducer from './updateDetailsReducer';
import {
  TASK_CLEAN_SELECTED_SERVICE,
  TASK_SELECT_SERVICE,
  TASK_UPDATE_DETAILS,
} from '../actions/actionTypes';

const initialState = {
  serviceSelection: {
    isCompleted: false,
    serviceId: null,
  },
  details: {
    taskName: '',
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
    default:
      return state;
  }
};
