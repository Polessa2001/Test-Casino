import React, { useState } from 'react';
import logo from '../../assets/Logo.png';
import Button from '../../components/buttons/Button';
import './NavBar.css';
import '../../index.css';
import vector from '../../assets/Vector.svg';
import menu from '../../assets/BurgerMenu.svg';
import x from '../../assets/X.svg';
import CircularButton from '../buttons/CircularButton';

const NavBar = () => {
  const[menuIsVisible, setMenuIsVisible] = useState(false);
  const showMenu = () => {
    setMenuIsVisible(true);
  }
  const hideMenu = () => {
    setMenuIsVisible(false);
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">
            <a href="#"><img src={logo} alt="Logo" /></a>
          </div>
          <button className="mobile-menu-icon" onClick={showMenu}><img src={menu} alt="menuIcon"/></button>
          <ul className="nav-links">
            <li><a href="#" alt="casino">Casino</a></li>
            <li><a href="#" alt="live-casino">Live Casino</a></li>
            <li><a href="#" alt="sports">Sports</a></li>
          </ul>
        </div>
        <div className="nav-buttons">
          <Button title={<img src={vector} alt="vector" />} color="var(--secondary-color)" padding='0.5rem'/>
          <Button title="Log in" color="var(--secondary-color)" />
          <Button title="Join us"  color="var(--primary-color)" />
        </div>
      </nav>
       <div className={`${menuIsVisible ? 'mobile-sidebar' : 'hidden'}`}>
        <div className="sidebar-top">
          <a href="#"><img src={logo} alt="Logo" /></a>
          <CircularButton onClick={hideMenu} color='var(--secondary-color)' action={`<img src=${x} alt="closing icon" className="closing-icon" />`} />
        </div>
        <ul className="mobile-links">
          <li><a href="#" alt="casino">Casino</a></li>
          <li><a href="#" alt="live-casino">Live Casino</a></li>
          <li><a href="#" alt="sports">Sports Casino</a></li>
        </ul>
        <div className="sidebar-buttons">
          <Button title="Log in" color="var(--secondary-color)" />
          <Button title="Join us"  color="var(--primary-color)" />
        </div>
      </div>
   </>
  );
}

export default NavBar;
