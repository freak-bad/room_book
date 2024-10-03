import React, { useState } from "react";
import myImage from '../assets/WhatsApp Image 2024-10-01 at 11.40.11 PM (1).jpeg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav>
        <div className="nav__bar">
          <div className="logo">
            <a href="#">
              <img src={myImage} alt="logo" />
            </a>
          </div>
          <div className="nav__menu__btn" onClick={toggleMenu}>
            <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </div>
        </div>
        <ul className={`nav__links ${menuOpen ? "open" : ""}`} onClick={closeMenu}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="btn nav__btn">Book Now</button>
      </nav>
      <div className="section__container header__container" id="home">
        <p>Simple - Unique - Friendly</p>
        <h1>
          Make Yourself At Home
          <br /> In Our <span>Hotel</span>.
        </h1>
      </div>
    </header>
  );
};

export default Header;
