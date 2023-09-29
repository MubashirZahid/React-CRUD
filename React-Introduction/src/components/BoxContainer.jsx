import React from "react";
import "./BoxContainer.style.css";

const BoxContainer = () => {
  return (
    <div>
      <h1 className="parent-header">Donate Now</h1>
      <div className="box-container">
        <div className="box">
          <h2 className="box-header">Why Donately?</h2>
          <p className="box-info">
            We pride ourselves on making things easy to use - no code, no
            developers, and no training required.
          </p>
        </div>
        <div className="box">
          <h2 className="box-header">Is It Affordable?</h2>
          <p className="box-info">
            Our pricing model scales with your donation volume and ensures no
            hidden fees or surprises.
          </p>
        </div>
        <div className="box">
          <h2 className="box-header">Is It Safe?</h2>
          <p className="box-info">
            PCI and data privacy compliance with encryption and protection
            against cyber attacks
          </p>
        </div>
        <div className="box">
          <h2 className="box-header">How Is The Support?</h2>
          <p className="box-info">
            Our in-house support, developers, and strategists will make sure you
            don't have to campaign alone
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoxContainer;
