import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';
import './styles.scss';

const Link = ({ text, url, className }) => (
  <RouterLink
    className={classNames('link', className)}
    to={url}
  >
    {text}
  </RouterLink>
);

Link.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Link.defaultProps = {
  className: '',
};

export default Link;
