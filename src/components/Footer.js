import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Shibangi | Made with ❤️</p>
    </footer>
  );
};

export default Footer;
