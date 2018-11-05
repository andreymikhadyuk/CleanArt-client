import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TabPane = () => null;

TabPane.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TabPane;
