import "../Style/ourWorks.css";
import React from "react";
function OurWorks() {
  return (
    <div className="OurWorks-conatiner">
      <div className="row">
        <h5 className="heading-sm-lead">Our Services</h5>
        <h2 className="heading-section">What we do</h2>
        <div className="row">
          <div className="col-sm-6 res-s-bttm">
            <div className="icon-box style-s1 photo-plx-full">
              <svg
                className="work-logo"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z" />
              </svg>
            </div>
            <h4>Marketing</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusan tiudo lorem quveniamv eniam laud accusan tiud.
            </p>
          </div>
          <div className="col-sm-6">
            <div className="icon-box style-s1">
              <svg
                className="work-logo"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              </svg>
            </div>
            <h4>Consultation</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusan tiudo lorem quveniamv eniam laud accusan tiud.
            </p>
          </div>
          <div className="gaps size-lg"></div>
          <div className="col-sm-6 res-s-bttm">
            <div className="icon-box style-s1">
              <svg
                className="work-logo"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
              </svg>
            </div>
            <h4>Accounting</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusan tiudo lorem quveniamv eniam laud accusan tiud.
            </p>
          </div>
          <div className="col-sm-6">
            <div className="icon-box style-s1">
              <svg
                className="work-logo"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm3.295 3.995V11H4.104V5.995h-1.7V5H7v.994H5.295zM8.692 7.01V11H7.633V5.001h1.209l1.71 3.894h.039l1.71-3.894H13.5V11h-1.072V7.01h-.057l-1.42 3.239h-.773L8.75 7.008h-.058z" />
              </svg>
            </div>
            <h4>Trademarks</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusan tiudo lorem quveniamv eniam laud accusan tiud.
            </p>
          </div>
        </div>
      </div>

      <div className="ourWorks-img">
        <img
          src="http://demo.themenio.com/finance/image/photo-half-a.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default OurWorks;
