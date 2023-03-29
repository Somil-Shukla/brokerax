import React from "react";
function Install() {
  const dynamic = { backgroundImage: "url(img/in-liquid-3-bg.png)" };
  return (
    <div
      class="uk-section uk-section-muted uk-padding-large in-liquid-3 uk-background-contain uk-background-center-center"
      style={dynamic}
      data-uk-img=""
    >
      <div class="uk-container">
        <div class="uk-grid uk-flex uk-flex-center">
          <div class="uk-width-5-6@m uk-inline">
            <div
              class="uk-grid-large uk-flex uk-flex-middle uk-flex-right uk-grid uk-grid-stack"
              data-uk-grid=""
            >
              <div class="uk-position-top-left uk-first-column">
                <img
                  src="https://www.indonez.com/html-demo/Liquid/img/in-liquid-3-mockup.png"
                  data-src="img/in-liquid-3-mockup.png"
                  alt="sample-images"
                  width="650"
                  height="469"
                  data-uk-img=""
                />
              </div>
              <div class="uk-width-1-2@m uk-first-column">
                <span class="uk-label in-liquid-label uk-margin-bottom">
                  Available on multiple platform
                </span>
                <h2 class="uk-margin-remove">
                  World class platform
                  <br />
                  trade without a doubt.
                </h2>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum.
                </p>
                <div
                  class="uk-grid-small uk-child-width-1-3 uk-child-width-1-4@m uk-margin-medium-top uk-text-center uk-grid"
                  data-uk-grid=""
                >
                  <div class="uk-first-column">
                    <i class="fab fa-apple in-icon-wrap"></i>
                    <p class="uk-text-small">MacOS</p>
                  </div>
                  <div>
                    <i class="fab fa-windows in-icon-wrap"></i>
                    <p class="uk-text-small">Windows</p>
                  </div>
                  <div>
                    <i class="fab fa-google-play in-icon-wrap"></i>
                    <p class="uk-text-small">Android</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Install;
