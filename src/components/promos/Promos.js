import React from 'react';
import Button from '../buttons/Button';
import p1 from '../../assets/promos/p1.svg';
import p2 from '../../assets/promos/p2.svg';
import './Promos.css'

const Promos = () => {
  return (
    <div className="promos">
      <div className="promo">
        <img src={p1} alt="promo1" className="promo-img"/>
        <div className="promo-content">
          <h3>Grand casino battle: $15,000</h3>
          <p>It’s time to hunt for the casino Multiplier</p>
          <Button title = "View Details" color="var(--primary-color)"/>
        </div>
      </div>
      <div className="promo">
        <img src={p2} alt="promo2" className="promo-img" />
        <div className="promo-content">
            <h3>Cash Bombs: $1,000,000</h3>
            <p>$1Mil Explosion for cash drops and more</p>
            <Button title = "View Details" color="var(--primary-color)"/>
          </div>
        </div>
    </div>
  )
}

export default Promos
