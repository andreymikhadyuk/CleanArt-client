const updateAddressReducer = (state, { payload }) => ({
  ...state,
  address: { ...payload },
});

export default updateAddressReducer;
