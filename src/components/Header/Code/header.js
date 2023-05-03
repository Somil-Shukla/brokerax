import React from "react";
import "../Style/header.css";
import logo from "..//..//../images/Logo2.png";

export default function Header() {
  return (
    <header className="header-fixed">
      <div className="header-limiter">
        <img src={logo} alt="Logo" id="Logo-Header" />

        <nav id="header-nav">
          <a href="#">Home</a>
          <a href="#">Markets</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <button id="header-button">Log In/Sign Up &rarr;</button>
        </nav>
      </div>
    </header>
  );
}
