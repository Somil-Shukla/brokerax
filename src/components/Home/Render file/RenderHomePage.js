import React from "react";
import Craousel from "../Code/Reactcarousel";
import Info from "../Code/info";
import Addon from "../Code/Addon";
import Install from "../Code/install";
import End from "../Code/End";
import Last from "../Code/last";
export default function Home() {
  return (
    <div className="HomeContainer">
      <Craousel />
      <Addon />
      <Info />
      <Install />
      <End />
      <Last />
    </div>
  );
}
