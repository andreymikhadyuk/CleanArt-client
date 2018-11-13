import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'components/common';
import TaskCreationItem from '../TaskCreationItem';
import './styles.scss';

const convertServicesToOptions = services => services
  .map(({ id, name }) => ({
    value: id,
    label: name,
  }));

const TaskServiceSelection = ({ services, selectedService, onChange, onClick, isCompleted }) => {
  const styles = {
    block: 'task-service-selection',
    select: 'task-service-selection__select',
    selectedService: 'task-service-selection__selected-service',
  };
  const contentEl = isCompleted
    ? <span className={styles.selectedService}>{selectedService.label}</span>
    : (
      <Select
        className={styles.select}
        options={convertServicesToOptions(services)}
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
  selectedService: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

TaskServiceSelection.defaultProps = {
  selectedService: null,
};

export default TaskServiceSelection;
