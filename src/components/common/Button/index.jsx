import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Button = ({ type, text, emphasize, className, onClick, small }) => {
  const props = {
    className: classNames('button', {
      button_emphasize: emphasize,
      button_small: small,
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
  small: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  text: '',
  emphasize: false,
  className: '',
  onClick: null,
  small: false,
};

export default Button;
