import React from 'react';
import './Footer.css'; // Assuming you'll add the styles in this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__socials">
          <h4>Follow Us</h4>
          <ul className="social__list">
            <li><a href="https://www.facebook.com/Dantewadadist" target="_blank" rel="noopener noreferrer">
              <i className="ri-facebook-circle-line"></i> Facebook
            </a></li>
            <li><a href="https://x.com/DantewadaDist" target="_blank" rel="noopener noreferrer">
              <i className="ri-twitter-line"></i> Twitter
            </a></li>
            <li><a href="https://www.instagram.com/dantewada_district/" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-line"></i> Instagram
            </a></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contact Us</h4>
          <p>Email: dnt.cg@gov.in</p>
          <p>Phone: +xxxxxxxxxxx</p>
          <p>Address: dantewad-CG</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} Your Hotel Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
