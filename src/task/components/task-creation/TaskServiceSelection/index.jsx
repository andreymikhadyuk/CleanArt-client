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

const TaskServiceSelection = ({ services, selectedService, onChange }) => {
  const styles = {
    block: 'task-service-selection',
    select: 'task-service-selection__select',
  };

  return (
    <section className={styles.block}>
      <TaskCreationItem
        title="Выберите подходящую клининговую услугу"
        active
      >
        <Select
          className={styles.select}
          options={convertServicesToOptions(services)}
          currentValue={selectedService}
          onChange={onChange}
        />
      </TaskCreationItem>
    </section>
  );
};

TaskServiceSelection.propTypes = {
  services: PropTypes.array.isRequired,
  selectedService: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

TaskServiceSelection.defaultProps = {
  selectedService: null,
};

export default TaskServiceSelection;
