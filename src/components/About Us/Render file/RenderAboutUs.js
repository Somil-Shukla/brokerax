import React from "react";
import Craousel from "../Code/aboutUsCaraousel";
import AboutUsInfo from "../Code/aboutInfo";
import OurWorks from "../Code/OurWorks";
import AboutUsLast from "../Code/aboutLast";
import AboutUsEnd from "../Code/AboutUsEnd";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <Craousel />
      <AboutUsInfo />
      <OurWorks />
      <AboutUsLast />
      <AboutUsEnd />
    </div>
  );
}
