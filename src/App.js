import React, { useEffect } from "react";
import Header from "./components/Header";
import Booking from "./components/Booking";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import ScrollReveal from "scrollreveal"; // Don't forget to install this package
import './styles.css';

const App = () => {
  useEffect(() => {
    const scrollRevealOptions = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    // Apply scroll reveal effects
    ScrollReveal().reveal(".header__container p", scrollRevealOptions);
    ScrollReveal().reveal(".header__container h1", { ...scrollRevealOptions, delay: 500 });
    ScrollReveal().reveal(".about__image img", { ...scrollRevealOptions, origin: "left" });
    ScrollReveal().reveal(".about__content .section__subheader", { ...scrollRevealOptions, delay: 500 });
    ScrollReveal().reveal(".about__content .section__header", { ...scrollRevealOptions, delay: 1000 });
    ScrollReveal().reveal(".about__content .section__description", { ...scrollRevealOptions, delay: 1500 });
    ScrollReveal().reveal(".about__btn", { ...scrollRevealOptions, delay: 2000 });
    ScrollReveal().reveal(".room__card", { ...scrollRevealOptions, interval: 500 });
    ScrollReveal().reveal(".service__list li", { ...scrollRevealOptions, interval: 500, origin: "right" });
    
  }, []);

  return (
    <div>
      <Header />
      <Booking />
      <About />
      <Rooms />
      <Services />
      <Banner />
      <Explore />
      <Footer />
    </div>
  );
};

export default App;
