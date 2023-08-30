import React from 'react';
import './Banner.css';
import banner from '../../assets/HeroBanner.png';

const Banner = () => {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${banner})` }} >
      <p>Experience the thrill!</p>
      <h1>100% up to $500 and 200 free spins!</h1>
      <a href="#" className="button red">Join now!</a>
    </section>
  );
}

export default Banner;
