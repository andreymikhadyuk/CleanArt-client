import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Select } from 'components/common';
import { CITIES_OPTIONS } from 'consts';
import TaskCreationItem from '../TaskCreationItem';
import './styles.scss';

const TEXT = {
  itemText: 'Адрес выполнения задания',
  cityLabel: 'Город',
  streetLabel: 'Адрес',
  streetPlaceholder: 'Например: ул. Воронянского, 3',
};

const TaskAddress = ({ isActive, city, street, handleChange, handleCityChange }) => {
  const styles = {
    block: 'task-address',
    content: 'task-address__content',
    label: 'task-address__form-label',
    input: 'task-address__form-input',
  };
  const props = {
    city: {
      options: CITIES_OPTIONS,
      currentValue: city,
      onChange: handleCityChange,
      clearable: false,
    },
    street: {
      name: 'street',
      value: street,
      placeholder: TEXT.streetPlaceholder,
      onChange: handleChange,
    },
  };

  return (
    <TaskCreationItem
      className={styles.block}
      title={TEXT.itemText}
      active={isActive}
    >
      <div className={styles.content}>
        <span className={styles.label}>{TEXT.cityLabel}</span>
        <div className={styles.input}>
          <Select {...props.city} />
        </div>
        <span className={styles.label}>{TEXT.streetLabel}</span>
        <div className={styles.input}>
          <TextInput {...props.street} />
        </div>
      </div>
    </TaskCreationItem>
  );
};

TaskAddress.propTypes = {
  isActive: PropTypes.bool.isRequired,
  city: PropTypes.object.isRequired,
  street: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCityChange: PropTypes.func.isRequired,
};

export default TaskAddress;
