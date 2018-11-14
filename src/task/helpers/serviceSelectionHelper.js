const convertServicesToOptions = services => services
  .map(({ id, name }) => ({
    value: id,
    label: name,
  }));

const findSelectedService = (options, selectedServiceId) => options
  .find(item => item.value === selectedServiceId);

export {
  convertServicesToOptions,
  findSelectedService,
};
