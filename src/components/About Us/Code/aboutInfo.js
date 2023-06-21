import "../Style/AboutUsInfo.css";
import React from "react";

function AboutUsInfo() {
  const headingStyle={
    fontSize:"1.5rem"
  }
  const pStyle={
    fontSize:"1.2rem"
  }
  return (
    <div className="aboutUsinfo">
      <div className="heading-text">
        <h5 className="heading-sm-lead" style={headingStyle}>ABOUT US</h5>
        <h2 className="heading-section">WHO WE ARE</h2>
        <p style={pStyle}>We are Finance Corp, We provide Finance consulting from 30 years.</p>
        <p style={pStyle} >
          Accumsan est in tempus etos ullamcorper sem quam suscipit lacus
          maecenas tortor. Suspendisse gravida ornare non mattis velit rutrum
          modest sed do eiusmod tempor incididunt ut labore et dolore.{" "}
        </p>
        <p style={pStyle}>
          We have one of the philo sophia nec mei maiorum appell antur. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus egestas varius penatibus.
        </p>
      </div>

      <img
        className="no-round"
        src="http://demo.themenio.com/finance/image/photo-home-a.jpg"
        alt="man"
      />
    </div>
  );
}

export default AboutUsInfo;
