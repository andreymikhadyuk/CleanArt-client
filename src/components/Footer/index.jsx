import React from 'react';
import './styles.scss';

const Footer = () => (
  <footer className="footer">
    <span className="copyright">
      CleanArt © {new Date().getFullYear()}. All rights reserved.
    </span>
  </footer>
);

export default Footer;
