import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const TextInput = ({ type, name, placeholder, value, onChange, error, className }) => {
  const styles = {
    block: classNames('text-input', {
      'text-input_error': error,
    }, className),
    input: 'text-input__input',
    details: 'text-input__details',
  };

  const props = {
    className: styles.input,
    type,
    name,
    placeholder,
    value,
    readOnly: onChange === null,
    onChange,
  };

  return (
    <div className={styles.block}>
      <input {...props} />
      {error && <span className={styles.details}>{error}</span>}
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'tel']),
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
