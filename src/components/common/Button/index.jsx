import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ type, text }) => (
  <button
    className="button"
    type={type}
  >
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  text: '',
};

export default Button;
