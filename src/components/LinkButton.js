import React from 'react';
import './LinkButton.css';

const LinkButton = ({ label, url }) => {
  return (
    <a href={url} className="link-button" target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
};

export default LinkButton;
