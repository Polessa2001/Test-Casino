import React from 'react';
import './Footer.css';
import footerImg from '../../assets/footerIcons/footerImg.png';
import visa from '../../assets/footerIcons/visa.svg';
import crypto from '../../assets/footerIcons/Crypto.svg';
import mastercard from '../../assets/footerIcons/mastercard.svg';
import astropay from '../../assets/footerIcons/AstroPay.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="information">
          <p>Information</p>
          <ul>
            <li>About us</li>
            <li>Payments</li>
            <li>Support</li>
            <li>FAQ</li>
            <li>How to crypto</li>
          </ul>
        </div>
        <div className="legal">
          <p>Legal</p>
          <ul>
            <li>Terms and conditions</li>
            <li>Privacy Policy</li>
            <li>Responsible Gaming</li>
            <li>Registration Procedure</li>
            <li>KYC Policy</li>
          </ul>
        </div>
      </div>
      <div className="footer-right">
        <div className="payment">
          <div><img src ={visa} alt="visa"/></div>
          <div><img src = {mastercard} alt="mastercard"/></div>
          <div><img src = {astropay} alt="astropay"/></div>
          <div><img src = {crypto} alt="crypto"/></div>
        </div>
        <div className="footer-right-content">
          <img src={footerImg} alt = "footer-Image"/>
          <p>This website is operated by R&B Innovations N.V., a company registered and established under the laws of Curaçao, with registration number 156744 and registered address at Heelsumstraat 51 E-Commerce Park, Willemstad, Curaçao. It wholly owns the subsidiary for payment processing, Double Down Interactive Ltd, a company registered under the laws of Cyprus, with registration number ΗΕ 419951 and registered address at Chytron, 30, 2nd floor, Flat/Office A22, 1075, Nicosia, Cyprus.R&B Innovations N.V. is licensed to conduct online gaming operations by the Government of Curacao, under Master License No. 8048,Sub-License JAZ2021-012.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
