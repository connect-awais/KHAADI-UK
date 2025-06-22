import React from 'react'
import './Track.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Track = () => {
  return (
    <div>
    <div className="track-navbar">
      <Link to="/">
        <img src={logo} className="nav-img"/>
      </Link>
    </div>

    <div className="tracker">
      <div className="tracker-input">
      <h3>Track your order</h3>
      <input type="number" name="number" placeholder="Type in your order or tracking number" />
      </div>
      <button className="order-btn">TRACK ORDER</button>
    </div>

    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} className="footer-logo" />
        </div>
        <div className="footer-right">
          <p>
            Copyright © 2025 Weaves Corporation Limited (Formerly Khaadi
            Corporation Limited). All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Track