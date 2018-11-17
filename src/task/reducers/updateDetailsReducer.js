const updateDetailsReducer = (state, { payload }) => ({
  ...state,
  details: { ...payload },
});

export default updateDetailsReducer;
