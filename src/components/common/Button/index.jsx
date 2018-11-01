import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './styles.scss';

const Button = ({ type, text, emphasize, className, onClick, small, url }) => {
  const props = {
    className: classNames('button', {
      button_emphasize: emphasize,
      button_small: small,
    }, className),
    type,
    onClick,
  };

  const buttonEl = (
    <button {...props}>
      {text}
    </button>
  );

  return url
    ? <Link to={url} className="button__link">{buttonEl}</Link>
    : buttonEl;
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  emphasize: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  small: PropTypes.bool,
  url: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  text: '',
  emphasize: false,
  className: '',
  onClick: null,
  small: false,
  url: '',
};

export default Button;
