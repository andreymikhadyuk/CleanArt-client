import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Textarea = ({ name, placeholder, value, onChange, error, className }) => {
  const styles = {
    block: classNames('textarea', {
      'textarea_error': error,
    }, className),
    input: 'textarea__input',
    details: 'textarea__details',
  };

  const props = {
    className: styles.input,
    name,
    placeholder,
    value,
    readOnly: onChange === null,
    onChange,
  };

  return (
    <div className={styles.block}>
      <textarea {...props} />
      {error && <span className={styles.details}>{error}</span>}
    </div>
  );
};

Textarea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  className: PropTypes.string,
};

Textarea.defaultProps = {
  name: '',
  placeholder: '',
  value: '',
  onChange: null,
  error: '',
  className: '',
};

export default Textarea;
