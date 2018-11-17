import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'components/common';
import TaskCreationItem from '../TaskCreationItem';
import './styles.scss';

const TaskDetails = ({ taskName, taskNameHint, handleChange }) => {
  const styles = {
    block: 'task-details',
    content: 'task-details__content',
    label: 'task-details__form-label',
    input: 'task-details__form-input',
  };
  const props = {
    taskName: {
      name: 'taskName',
      value: taskName,
      placeholder: taskNameHint ? `Например: ${taskNameHint}` : '',
      onChange: handleChange,
    },
  };

  return (
    <TaskCreationItem
      className={styles.block}
      title="Детали задания"
      active
    >
      <div className={styles.content}>
        <span className={styles.label}>Что нужно сделать (кратко)?</span>
        <div className={styles.input}>
          <TextInput {...props.taskName} />
        </div>
      </div>
    </TaskCreationItem>
  );
};

TaskDetails.propTypes = {
  taskName: PropTypes.string.isRequired,
  taskNameHint: PropTypes.string,
};

TaskDetails.defaultProps = {
  taskNameHint: '',
};

export default TaskDetails;
