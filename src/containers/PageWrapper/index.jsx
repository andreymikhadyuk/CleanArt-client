import React from 'react';
import PropTypes from 'prop-types';

const PageWrapper = ({ children }) => (
  <div className="page-wrapper">
    <div className="page-wrapper__content">
      {children}
    </div>
  </div>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
