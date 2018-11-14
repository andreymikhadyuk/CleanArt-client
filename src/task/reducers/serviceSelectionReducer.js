const selectServiceReducer = (state, { payload }) => ({
  ...state,
  serviceSelection: {
    isCompleted: payload !== null,
    serviceId: payload,
  },
});

const cleanSelectedServiceReducer = state => ({
  ...state,
  serviceSelection: {
    isCompleted: false,
    serviceId: null,
  },
});

export {
  selectServiceReducer,
  cleanSelectedServiceReducer,
};
