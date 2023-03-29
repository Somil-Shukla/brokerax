import React from "react";
import "../styles/Addon.css";
export default function Addon() {
  return (
    <div className="container">
      <div className="cards-1">
        <div className="uk-flex ">
          <img
            className="logo-addon"
            src="https://www.indonez.com/html-demo/Liquid/img/in-liquid-icon-1.svg"
            alt="sample-icon"
            width="140"
            height="140"
          />

          <div>
            <h3 style={{ color: "black" }}>Expert service</h3>
            <p>
              Expert services provide corporate clients with <br /> access to
              the knowledge of highly qualified specialists <br /> to identify
              and address complex problems.
            </p>
            <a className="uk-button uk-button-text" href="#">
              Learn more &rarr;
              <i className="fas fa-long-arrow-alt-right uk-margin-small-left"></i>
            </a>
          </div>
        </div>
        <div className="uk-flex ">
          <img
            className="logo-addon"
            src="https://www.indonez.com/html-demo/Liquid/img/in-liquid-icon-2.svg"
            alt="sample-icon"
            width="128"
            height="128"
          />

          <div>
            <h3 style={{ color: "black" }}>Fully regulated</h3>
            <p>
              The material is accurately classified and described, packaged{" "}
              <br />
              in a specification package, marked, labeled, documented, <br />
              and certified before being offered to your carrier.
            </p>
            <a className="uk-button uk-button-text" href="#">
              Learn more &rarr;
              <i className="fas fa-long-arrow-alt-right uk-margin-small-left"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="cards-2">
        <div className="uk-flex ">
          <img
            className="logo-addon"
            src="https://www.indonez.com/html-demo/Liquid/img/in-liquid-icon-3.svg"
            alt="sample-icon"
            width="128"
            height="128"
          />

          <div>
            <h3>Financial strength</h3>
            <p>
              Financial strength is the ability of a company to generate <br />
              the money required to make investments, service debts (interest
              and repayments) and pay dividends to <br />
              shareholders with its own means
            </p>
            <a className="uk-button uk-button-text" href="#">
              Learn more &rarr;
              <i className="fas fa-long-arrow-alt-right uk-margin-small-left"></i>
            </a>
          </div>
        </div>
        <div className="uk-flex ">
          <img
            className="logo-addon"
            src="https://www.indonez.com/html-demo/Liquid/img/in-liquid-icon-4.svg"
            alt="sample-icon"
            width="128"
            height="128"
          />

          <div>
            <h3>Integrated support</h3>
            <p>
              The procedures, systems, and software Online <br />
              Resources has developed to coordinate the enrollment of Users on,
              and their use of, the Quotien(SM) System.
            </p>
            <a className="uk-button uk-button-text" href="#">
              Learn more &rarr;
              <i className="fas fa-long-arrow-alt-right uk-margin-small-left"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
