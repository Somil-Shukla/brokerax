import React from "react";
// import "../Style/header.css";
// import "../../Header/Style/header.css";
import "../Style/hereheader.css";
import logo from "..//..//../images/Logo2.png";

export default function Header() {
  return (
    <header className="header-fixed">
      <div className="header-limiter">
        <img src={logo} alt="Logo" id="Logo-Header" />

        <nav id="header-nav">
          <a href="#">Home</a>
          <a href="Markets">Markets</a>
          <a href="AboutUs">About Us</a>
          <a href="ContactUs">Contact Us</a>
          <button id="header-button"><a href="signup">Log In/Sign Up</a> &rarr;</button>
        </nav>
      </div>
    </header>
  );
}
