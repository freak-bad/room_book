import React from "react";

const Banner = () => {
  return (
    <section className="banner">
      <div className="section__container banner__container">
        <p className="section__subheader">GET DISCOUNT</p>
        <h2 className="section__header">Welcome! Get up to <span>30%</span> off for your first booking</h2>
        <button className="btn">Book Now</button>
      </div>
    </section>
  );
};

export default Banner;
