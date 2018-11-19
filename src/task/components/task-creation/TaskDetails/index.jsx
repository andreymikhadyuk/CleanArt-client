import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Textarea } from 'components/common';
import TaskCreationItem from '../TaskCreationItem';
import './styles.scss';

const TEXT = {
  itemText: 'Детали задания',
  taskNameLabel: 'Что нужно сделать (кратко)?',
  taskDescriptionLabel: 'Подробно опишите ваше задание',
  confidentialDataPlaceholder: 'Например: 3 подъезд, 11 этаж, квартира 45. За час до приезда'
    + ' позвонить по телефону +375 29 123 45 67 Игнат',
  confidentialDataLabel: 'Конфиденциальные данные',
};

const TaskDetails = ({
  isActive,
  taskName,
  taskNameHint,
  taskDescription,
  taskDescriptionHint,
  confidentialData,
  confidentialDataOpened,
  handleChange,
  toggleConfidentialDataInput,
}) => {
  const styles = {
    block: 'task-details',
    content: 'task-details__content',
    label: 'task-details__form-label',
    input: 'task-details__form-input',
    confidentialToggle: 'task-details__confidential-toggle',
    confidentialInput: 'task-details__confidential-input',
  };
  const props = {
    taskName: {
      name: 'taskName',
      value: taskName,
      placeholder: taskNameHint ? `Например: ${taskNameHint}` : '',
      onChange: handleChange,
    },
    taskDescription: {
      name: 'taskDescription',
      value: taskDescription,
      placeholder: taskDescriptionHint ? `Необходимо указать: ${taskDescriptionHint}` : '',
      onChange: handleChange,
    },
    confidentialData: {
      name: 'confidentialData',
      value: confidentialData,
      placeholder: TEXT.confidentialDataPlaceholder,
      onChange: handleChange,
      className: styles.confidentialInput,
    },
  };

  return (
    <TaskCreationItem
      className={styles.block}
      title={TEXT.itemText}
      active={isActive}
    >
      <div className={styles.content}>
        <span className={styles.label}>{TEXT.taskNameLabel}</span>
        <div className={styles.input}>
          <TextInput {...props.taskName} />
        </div>
        <span className={styles.label}>{TEXT.taskDescriptionLabel}</span>
        <div className={styles.input}>
          <Textarea {...props.taskDescription} />
        </div>
        <div className={styles.input}>
          <span
            className={styles.confidentialToggle}
            onClick={toggleConfidentialDataInput}
            role="presentation"
          >
            {TEXT.confidentialDataLabel}
          </span>
          {confidentialDataOpened && <Textarea {...props.confidentialData} />}
        </div>
      </div>
    </TaskCreationItem>
  );
};

TaskDetails.propTypes = {
  isActive: PropTypes.bool.isRequired,
  taskName: PropTypes.string.isRequired,
  taskNameHint: PropTypes.string,
  taskDescription: PropTypes.string.isRequired,
  taskDescriptionHint: PropTypes.string,
  confidentialDataOpened: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  toggleConfidentialDataInput: PropTypes.func.isRequired,
};

TaskDetails.defaultProps = {
  taskNameHint: '',
  taskDescriptionHint: '',
};

export default TaskDetails;
