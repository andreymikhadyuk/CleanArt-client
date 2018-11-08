import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputMask from 'react-input-mask';
import './styles.scss';

const PHONE_MASK = '+375 (99) 999-99-99';

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

  let inputEl = <input {...props} />;

  if (type === 'tel') {
    inputEl = (
      <InputMask mask={PHONE_MASK} {...props}>
        {inputProps => <input {...inputProps} />}
      </InputMask>
    );
  }

  return (
    <div className={styles.block}>
      {inputEl}
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
