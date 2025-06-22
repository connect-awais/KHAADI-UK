import React from 'react'
import './Footer.css'
import { RiInstagramLine, RiFacebookLine, RiTiktokLine, RiYoutubeLine } from "react-icons/ri";
import paymentimg from '../../assets/images/payment-img.svg'
import godaddy from '../../assets/images/godaady img.gif'
import logo from '../../assets/images/logo.png'


const Footer = () => {
  return (
    <div>
      <div className="shipping-info-bar">
        {/* Shipping Charges */}
        <div className="shipping-info-card">
          <div class="site-logo-icon">
            <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.333496 1.87433C0.333496 1.37722 0.53104 0.900482 0.882671 0.548977C1.2343 0.197473 1.71122 0 2.2085 0H13.4585C13.9558 0 14.4327 0.197473 14.7843 0.548977C15.136 0.900482 15.3335 1.37722 15.3335 1.87433V3.74865H16.6085C16.8894 3.7489 17.1667 3.81225 17.4198 3.93402C17.673 4.05578 17.8955 4.23286 18.071 4.45215L19.9222 6.76382C20.1886 7.09643 20.3337 7.50983 20.3335 7.9359V10.6212C20.3335 11.1183 20.136 11.595 19.7843 11.9465C19.4327 12.298 18.9558 12.4955 18.4585 12.4955H17.8335C17.8335 13.1583 17.5701 13.794 17.1013 14.2626C16.6324 14.7313 15.9965 14.9946 15.3335 14.9946C14.6705 14.9946 14.0346 14.7313 13.5657 14.2626C13.0969 13.794 12.8335 13.1583 12.8335 12.4955H6.5835C6.58422 12.8286 6.51831 13.1585 6.38965 13.4658C6.26099 13.7731 6.07218 14.0515 5.83431 14.2848C5.59644 14.5181 5.31431 14.7015 5.00452 14.8242C4.69473 14.9469 4.36352 15.0065 4.03036 14.9994C3.69721 14.9924 3.36883 14.9188 3.06453 14.783C2.76024 14.6472 2.48617 14.452 2.25843 14.2088C2.0307 13.9656 1.85389 13.6794 1.73841 13.3669C1.62294 13.0545 1.57111 12.7221 1.586 12.3893C1.21981 12.2605 0.90265 12.0212 0.678301 11.7045C0.453953 11.3878 0.333475 11.0092 0.333496 10.6212L0.333496 1.87433ZM1.951 11.191C2.177 10.8211 2.49539 10.5164 2.87487 10.3067C3.25435 10.0971 3.68187 9.98981 4.11541 9.99535C4.54894 10.0009 4.97357 10.1191 5.34756 10.3384C5.72156 10.5576 6.03204 10.8704 6.2485 11.246H13.1685C13.3884 10.8664 13.7038 10.5511 14.0835 10.3313V1.87433C14.0835 1.70863 14.0176 1.54971 13.9004 1.43254C13.7832 1.31538 13.6243 1.24955 13.4585 1.24955H2.2085C2.04274 1.24955 1.88376 1.31538 1.76655 1.43254C1.64934 1.54971 1.5835 1.70863 1.5835 1.87433V10.6212C1.5834 10.7414 1.61802 10.8592 1.68321 10.9602C1.7484 11.0613 1.84138 11.1414 1.951 11.191ZM15.3335 9.9964C15.7723 9.99642 16.2034 10.1119 16.5835 10.3312C16.9635 10.5506 17.2791 10.8661 17.4985 11.246H18.4585C18.6243 11.246 18.7832 11.1801 18.9004 11.063C19.0176 10.9458 19.0835 10.7869 19.0835 10.6212V7.93465C19.0832 7.79286 19.0348 7.65538 18.946 7.54479L17.096 5.23312C17.0375 5.15994 16.9634 5.10084 16.879 5.06018C16.7946 5.01952 16.7022 4.99834 16.6085 4.9982H15.3335V9.9964ZM4.0835 11.246C3.75198 11.246 3.43403 11.3776 3.19961 11.6119C2.96519 11.8463 2.8335 12.1641 2.8335 12.4955C2.8335 12.8269 2.96519 13.1447 3.19961 13.3791C3.43403 13.6134 3.75198 13.7451 4.0835 13.7451C4.41502 13.7451 4.73296 13.6134 4.96738 13.3791C5.2018 13.1447 5.3335 12.8269 5.3335 12.4955C5.3335 12.1641 5.2018 11.8463 4.96738 11.6119C4.73296 11.3776 4.41502 11.246 4.0835 11.246ZM15.3335 11.246C15.002 11.246 14.684 11.3776 14.4496 11.6119C14.2152 11.8463 14.0835 12.1641 14.0835 12.4955C14.0835 12.8269 14.2152 13.1447 14.4496 13.3791C14.684 13.6134 15.002 13.7451 15.3335 13.7451C15.665 13.7451 15.983 13.6134 16.2174 13.3791C16.4518 13.1447 16.5835 12.8269 16.5835 12.4955C16.5835 12.1641 16.4518 11.8463 16.2174 11.6119C15.983 11.3776 15.665 11.246 15.3335 11.246Z" fill="#F8643C"></path>
            </svg>
          </div>
          <div className="store-info">
            <p><strong>SHIPPING</strong></p>
            <span className="shipping-detail">Standard shipping of £4 on all orders</span>
          </div>
        </div>

        {/* Track Your Order */}
        <div className="order-tracking-card">
          <div class="site-logo-icon">
            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.55 1C17.322 1 19.5 3.11008 19.5 5.79564C19.5 8.87183 16.8344 11.4163 12.7106 15.0526L10.5 17L8.58646 15.3218C4.29404 11.5372 1.5 8.94507 1.5 5.79564C1.5 3.11008 3.678 1 6.45 1C8.016 1 9.519 1.70627 10.5 2.82234C11.481 1.70627 12.984 1 14.55 1Z" stroke="#F8643C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <div className="store-info">
            <strong className="tracking-title">CRAFTED WITH CARE</strong>
            <span className="tracking-detail">Curated with you in mind.</span>
          </div>
        </div>

        {/* Store Locator */}
        <div className="store-locator-card">
          <div class="site-logo-icon">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.1665 3C8.2965 3 5.1665 6.13 5.1665 10C5.1665 15.25 12.1665 21 12.1665 21C12.1665 21 19.1665 15.25 19.1665 10C19.1665 6.13 16.0365 3 12.1665 3Z" stroke="#F8643C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M12.1665 12.5C10.7865 12.5 9.6665 11.38 9.6665 10C9.6665 8.62 10.7865 7.5 12.1665 7.5C13.5465 7.5 14.6665 8.62 14.6665 10C14.6665 11.38 13.5465 12.5 12.1665 12.5Z" stroke="#F8643C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <div className="store-info">
            <strong className="location-title">FIND STORES</strong>
            <span className="location-detail">Stores countrywide across Pakistan, UK, UAE, US.</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="help-section">
          <p>NEED HELP?</p>
        </div>
        <div className="faq-section">
          <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5835 4.79175V10.9584C21.5835 11.3673 21.7459 11.7594 22.035 12.0485C22.3242 12.3377 22.7163 12.5001 23.1252 12.5001H29.2918" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M26.2085 32.5417H10.7918C9.97408 32.5417 9.18982 32.2169 8.61158 31.6387C8.03335 31.0604 7.7085 30.2762 7.7085 29.4584V7.87508C7.7085 7.05733 8.03335 6.27307 8.61158 5.69484C9.18982 5.1166 9.97408 4.79175 10.7918 4.79175H21.5835L29.2918 12.5001V29.4584C29.2918 30.2762 28.967 31.0604 28.3887 31.6387C27.8105 32.2169 27.0262 32.5417 26.2085 32.5417Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M25.0039 20.0846C24.7948 20.3366 24.5666 20.5315 24.3193 20.6694C24.0769 20.8072 23.7964 20.8762 23.4779 20.8762C23.0452 20.8762 22.6982 20.7597 22.4367 20.5267C22.18 20.2938 22.0136 19.9681 21.9375 19.5498C21.4003 19.4452 20.9771 19.1884 20.6681 18.7796C20.3591 18.366 20.2046 17.8692 20.2046 17.2891C20.2046 16.866 20.2997 16.4809 20.4898 16.1339C20.68 15.7821 20.9462 15.5063 21.2885 15.3066C21.6308 15.1022 22.0183 15 22.4509 15C22.9026 15 23.2972 15.0998 23.6347 15.2995C23.9723 15.4944 24.2314 15.7654 24.4121 16.1125C24.5975 16.4595 24.6902 16.8518 24.6902 17.2891C24.6902 17.6647 24.6189 18.0118 24.4762 18.3303C24.3336 18.6441 24.1316 18.9079 23.8701 19.1219C23.6086 19.3358 23.3043 19.4784 22.9573 19.5498C23.0619 19.8588 23.2687 20.0133 23.5777 20.0133C23.7441 20.0133 23.8938 19.9753 24.027 19.8992C24.1601 19.8279 24.3003 19.7138 24.4477 19.5569L25.0039 20.0846ZM21.2101 17.2963C21.2101 17.7146 21.3218 18.0522 21.5453 18.3089C21.7735 18.5609 22.073 18.6869 22.4438 18.6869C22.8146 18.6869 23.1142 18.5609 23.3424 18.3089C23.5706 18.0522 23.6847 17.7146 23.6847 17.2963C23.6847 16.8779 23.5729 16.5427 23.3495 16.2908C23.126 16.0388 22.8289 15.9128 22.4581 15.9128C22.0872 15.9128 21.7854 16.0388 21.5524 16.2908C21.3242 16.5427 21.2101 16.8779 21.2101 17.2963Z" fill="black"></path>
            <path d="M16.2791 19.5212H15.2808L17.0137 15.0713H18.1547L19.8804 19.5212H18.8535L18.4684 18.4587H16.6571L16.2791 19.5212ZM17.5628 15.9128L16.9281 17.6243H18.1975L17.5628 15.9128Z" fill="black"></path>
            <path d="M12.9984 19.5212H12V15.0713H15.2447V15.9912H12.9984V16.9753H14.9595V17.8881H12.9984V19.5212Z" fill="black"></path>
            <path d="M12 29H20M12 26H25.5M12 23H25.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <p>FAQS</p>
        </div>
      </div>

      <div className="footer-section">
        <div className="help footer">
          <h4>HELP</h4>
          <p><a href="#">Frequently Asked Questions</a></p>
          <p><a href="#">Return Your Order</a></p>
          <p><a href="#">Terms & Conditions</a></p>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">Disclaimer</a></p>
        </div>
        <div className="khaadi-title footer">
          <h4>MORE FROM KHAADI</h4>
          <p><a href="#">About Us</a></p>
          <p><a href="#">Blogs</a></p>
          <p><a href="#">Cloth Care</a></p>
        </div>
        <div className="social-news">
         <div className="social footer">
          <h4>OUR SOCIAL</h4>
          <div className="social-icons">
      <a href="https://www.instagram.com" className="icon instagram" target="_blank" rel="noopener noreferrer">
        <RiInstagramLine />
      </a>
      <a href="https://www.facebook.com" className="icon facebook" target="_blank" rel="noopener noreferrer">
        <RiFacebookLine />
      </a>
      <a href="https://www.tiktok.com" className="icon tiktok" target="_blank" rel="noopener noreferrer">
        <RiTiktokLine />
      </a>
      <a href="https://www.youtube.com" className="icon youtube" target="_blank" rel="noopener noreferrer">
        <RiYoutubeLine />
      </a>
      </div>
    </div>

    <div className="news-letter">
      <h5>GET THE LATEST NEWS</h5>
      <div className="input-form">
        <input type="text" placeholder="Email Address" />
        <button>CONFIRM</button>
      </div>
    </div>
      </div>
      </div>

      <div className="footer-info-container">
      {/* Safe Checkout */}
      <div className="footer-column">
        <p className="footer-heading">100% Safe Checkout</p>
        <div className="payment-icons">
          <img src={paymentimg}/>
        </div>
      </div>

      {/* Secured by */}
      <div className="footer-column">
        <p className="footer-heading">Secured by</p>
        <img
          src={godaddy}
          className="security-badge"
        />
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <img src={logo} className="khaadi-logo" />
        <p className="copyright">
          Copyright © 2025 Weaves Corporation Limited (Formerly Khaadi Corporation <br />
          Limited). All Rights Reserved.
        </p>
      </div>
    </div>

    </div>
  )
}

export default Footer