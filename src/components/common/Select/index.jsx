import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import classNames from 'classnames';

const Select = ({ options, currentValue, clearable, onChange, className }) => {
  const props = {
    options,
    value: currentValue,
    isClearable: clearable,
    onChange,
    className: classNames(className),
  };

  return (
    <ReactSelect {...props} />
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  })).isRequired,
  currentValue: PropTypes.object,
  clearable: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

Select.defaultProps = {
  currentValue: null,
  clearable: true,
  onChange: null,
  className: '',
};

export default Select;
