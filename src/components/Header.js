import React from 'react';
import './Header.css';
import profilePic from '../assets/profile.jpg'; // Add your own image in assets

const Header = () => {
  return (
    <div className="header">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h2 className="name">Shibangi Lodh</h2>
      <p className="bio">A passionate developer.</p>
    </div>
  );
};

export default Header;
