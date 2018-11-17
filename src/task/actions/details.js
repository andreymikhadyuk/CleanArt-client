import { TASK_UPDATE_DETAILS } from './actionTypes';

const updateDetails = details => ({
  type: TASK_UPDATE_DETAILS,
  payload: details,
});

export {
  updateDetails,
};
