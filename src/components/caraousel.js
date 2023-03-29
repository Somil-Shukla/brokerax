import React from "react";
import "../styles/style.css";
import "react-bootstrap";
function Caraousel() {
  return (
    <div className="App">
      <div className="card-1">
        <h1>
          Multi-regulated <br /> global broker.
          <p>
            A trusted destination for traders worldwide, <br /> Authorised by
            FCA, ASIC & FSCA
          </p>
        </h1>

        <img
          src="https://www.indonez.com/html-demo/Liquid/img/in-liquid-slide-1.svg"
          alt=""
        /> 
      </div>
      {/* 2 */}
      <div className="card-1">
        <h1>
          New Standard <br /> in Stock Broker
          <p>
            Trade Forex, Commodities, Synthetic and stock <br /> indices from a
            single account
          </p>
        </h1>

        <img
          src="https://www.indonez.com/html-demo/Liquid/img/in-liquid-slide-2.svg"
          alt=""
        />
      </div>
    </div>
  );
}
export default Caraousel;
