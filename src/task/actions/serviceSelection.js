import { TASK_SELECT_SERVICE, TASK_CLEAN_SELECTED_SERVICE } from './actionTypes';

const selectService = serviceId => ({
  type: TASK_SELECT_SERVICE,
  payload: serviceId,
});

const cleanSelectedService = () => ({ type: TASK_CLEAN_SELECTED_SERVICE });

export {
  selectService,
  cleanSelectedService,
};
