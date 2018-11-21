import { TASK_UPDATE_ADDRESS } from './actionTypes';

const updateAddress = address => ({
  type: TASK_UPDATE_ADDRESS,
  payload: address,
});

export {
  updateAddress,
};
