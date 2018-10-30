import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const TextInput = ({ type, name, placeholder, value, onChange, error, className }) => {
  const props = {
    className: 'text-input__input',
    type,
    name,
    placeholder,
    value,
    readOnly: onChange === null,
    onChange,
  };
  return (
    <div
      className={classNames('text-input', {
        'text-input_error': error,
      }, className)}
    >
      <input {...props} />
      {error && <span className="text-input__details">{error}</span>}
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  className: PropTypes.string,
};

TextInput.defaultProps = {
  type: 'text',
  name: '',
  placeholder: '',
  value: '',
  onChange: null,
  error: '',
  className: '',
};

export default TextInput;
