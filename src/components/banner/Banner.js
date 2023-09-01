import React from 'react';
import './Banner.css';

import banner from '../../assets/HeroBanner.png';
import Button from '../../components/buttons/Button'
import character from '../../assets/Character.svg';

const Banner = () => {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${banner})` }} >
        <div className="banner-box">
          <div className="banner-content">
            <p>Experience the thrill!</p>
            <h1>
              100% up to $500 and 200 free <span> spins!</span>
            </h1>
            <Button title="Join now!" color="var(--primary-color)" font='20px'/>
          </div>
          <img className="character" src={character} />
        </div>
    </section>
  );
}

export default Banner;
