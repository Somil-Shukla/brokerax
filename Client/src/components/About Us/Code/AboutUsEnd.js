import "../Style/AboutUsEnd.css";
import React from "react";
function AboutUsEnd() {
  return (
    <div className="End-container-1">
      <div className="container-2">
        <div className="end-flex-container">
          <div className="contact">
            <h2>Have any Question?</h2>
            <p>
              We're here to help. Send us an email or call us at +012-345-6789.{" "}
              <br />
              Please feel free to contact our expert.
            </p>
          </div>
          <a className="contactBtn" href="#">
            <p> Contact Us</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUsEnd;
