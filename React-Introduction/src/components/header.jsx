import React from "react";
import "./header.style.css";
import Button from "./button";
import Banner from "./banner";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">Donately</div>
      <div className="header-menu">
        <div className="header-menu-item">Home</div>
        <div className="header-menu-item">Features</div>
        <div className="header-menu-item">Blog</div>
        <div className="header-menu-item">Login</div>
        <Button />
      </div>
    </div>
  );
};

export default Header;
