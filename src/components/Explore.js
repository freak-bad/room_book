import React from "react";
import myImage from '../assets/explore.jpg';

const Explore = () => {
  return (
    <section className="section__container explore__container" id="explore">
      <p className="section__subheader">EXPLORE</p>
      <h2 className="section__header">Discover New Destinations.</h2>
      <div className="explore__grid">
        <div className="explore__card">
          <img src={myImage} alt="explore" />
          <h4>Beautiful Beaches</h4>
        </div>
        <div className="explore__card">
          <img src={myImage} alt="explore" />
          <h4>Majestic Mountains</h4>
        </div>
        <div className="explore__card">
          <img src={myImage} alt="explore" />
          <h4>Urban Adventures</h4>
        </div>
      </div>
    </section>
  );
};

export default Explore;
