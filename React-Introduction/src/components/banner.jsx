import React from "react";
import donationImage from "../assets/donation_02.jpg";
import "./banner.style.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={donationImage} alt="Donation" />
    </div>
  );
};

export default Banner;
