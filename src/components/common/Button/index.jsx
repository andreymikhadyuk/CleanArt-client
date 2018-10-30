import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Button = ({ type, text, emphasize, className, onClick }) => {
  const props = {
    className: classNames('button', {
      button_emphasize: emphasize,
    }, className),
    type,
    onClick,
  };

  return (
    <button {...props}>
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  emphasize: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  text: '',
  emphasize: false,
  className: '',
  onClick: null,
};

export default Button;
