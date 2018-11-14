import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'components/common';
import TaskCreationItem from '../TaskCreationItem';
import { convertServicesToOptions, findSelectedService } from '../../../helpers/serviceSelectionHelper';
import './styles.scss';

const TaskServiceSelection = ({ services, selectedServiceId, onChange, onClick, isCompleted }) => {
  const styles = {
    block: 'task-service-selection',
    select: 'task-service-selection__select',
    selectedService: 'task-service-selection__selected-service',
  };
  const options = convertServicesToOptions(services);
  const selectedService = findSelectedService(options, selectedServiceId) || {};
  const contentEl = isCompleted
    ? <span className={styles.selectedService}>{selectedService.label}</span>
    : (
      <Select
        className={styles.select}
        options={options}
        currentValue={selectedService}
        onChange={onChange}
      />
    );

  return (
    <TaskCreationItem
      className={styles.block}
      title="Выберите подходящую клининговую услугу"
      active
      completed={isCompleted}
      onClick={onClick}
    >
      {contentEl}
    </TaskCreationItem>
  );
};

TaskServiceSelection.propTypes = {
  services: PropTypes.array.isRequired,
  selectedServiceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

TaskServiceSelection.defaultProps = {
  selectedServiceId: null,
};

export default TaskServiceSelection;
