import React from 'react';
import logo from '../../assets/Logo.png';
import Button from '../buttons/Button';
import './NavBar.css';
import '../../index.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#"><img src={logo} alt="Logo" /></a>
      </div>
      <ul className="nav-links">
        <li><a href="#">Casino</a></li>
        <li><a href="#">Live Casino</a></li>
        <li><a href="#">Sports</a></li>
      </ul>
      <div className="nav-buttons">
        <Button title="" />
       <Button title="Log in" />
       <Button title="Join us" />
      </div>
    </nav>
  );
}

export default NavBar;
