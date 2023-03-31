import "../styles/AboutUsInfo.css";
function AboutUsInfo() {
  return (
    <div className="aboutUsinfo">
      <div className="heading-text">
        <h5 className="heading-sm-lead">ABOUT US</h5>
        <h2 className="heading-section">WHO WE ARE</h2>
        <p>We are Finance Corp, We provide Finance consulting from 30 years.</p>
        <p>
          Accumsan est in tempus etos ullamcorper sem quam suscipit lacus
          maecenas tortor. Suspendisse gravida ornare non mattis velit rutrum
          modest sed do eiusmod tempor incididunt ut labore et dolore.{" "}
        </p>
        <p>
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
