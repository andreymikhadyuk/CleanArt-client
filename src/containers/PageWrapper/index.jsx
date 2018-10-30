import React from 'react';
import PropTypes from 'prop-types';
import Header from 'containers/Header';
import Footer from 'components/Footer';
import './styles.scss';

const PageWrapper = ({ children }) => (
  <div className="page-wrapper">
    <div className="page-wrapper__content">
      <Header />
      {children}
    </div>
    <Footer />
  </div>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
