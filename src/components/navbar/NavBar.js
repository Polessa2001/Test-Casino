import React from 'react';
import logo from '../../assets/Logo.png';
import Button from '../../components/buttons/Button';
import './NavBar.css';
import '../../index.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <a href="#"><img src={logo} alt="Logo" /></a>
        </div>
        <ul className="nav-links">
          <li><a href="#">Casino</a></li>
          <li><a href="#">Live Casino</a></li>
          <li><a href="#">Sports</a></li>
        </ul>
      </div>
      <div className="nav-buttons">
        <Button title="" />
        <Button title="Log in" color="var(--secondary-color)" />
        <Button title="Join us"  color="var(--primary-color)" />
      </div>
    </nav>
  );
}

export default NavBar;
