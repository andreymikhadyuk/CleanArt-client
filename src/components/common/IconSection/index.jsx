import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import COLORS from './colors';
import './styles.scss';

const IconSection = ({ icon, title, color }) => (
  <div className="icon-section">
    <div className="icon-section__icon">
      <FontAwesomeIcon icon={icon} color={color} />
    </div>
    <div className="icon-section__content icon-section__content_vertical-center">
      {title}
    </div>
  </div>
);

IconSection.COLORS = COLORS;

IconSection.propTypes = {
  icon: PropTypes.node.isRequired,
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
};

IconSection.defaultProps = {
  color: COLORS.BLACK,
};

export default IconSection;
