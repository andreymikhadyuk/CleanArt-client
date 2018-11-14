import { selectServiceReducer, cleanSelectedServiceReducer } from './serviceSelectionReducer';
import {
  TASK_CLEAN_SELECTED_SERVICE,
  TASK_SELECT_SERVICE,
} from '../actions/actionTypes';

const initialState = {
  serviceSelection: {
    isCompleted: false,
    serviceId: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TASK_SELECT_SERVICE:
      return selectServiceReducer(state, action);
    case TASK_CLEAN_SELECTED_SERVICE:
      return cleanSelectedServiceReducer(state, action);
    default:
      return state;
  }
};
