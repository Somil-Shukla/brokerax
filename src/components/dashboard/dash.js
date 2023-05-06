import React from "react";
import "./dash.css";
// import "./component";
// import "jquery";

export default function Dash() {
  return (
    <div id="overall">
      <input type="checkbox" id="nav-toggle" />

      <div class="sidebar">
        <div class="sidebar-brand">
          <h2>
            <span>
              <i class="fab fa-accusoft"></i>
            </span>
            <span id="kleenpulse">Brokerax</span>
          </h2>
        </div>
        <div class="sidebar-menu">
          <ul>
            <li>
              <a href="#" class="active">
                <span class="fas fa-cubes"></span>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="Markets">
                <span class="fas fa-users"></span>
                <span>Market</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="fas fa-clipboard-list"></span>
                <span>Wallet</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="fas fa-shopping-bag"></span>
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="fas fa-receipt"></span>
                <span>News Info</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="fa fa-user-circle"></span>
                <span>Accounts</span>
              </a>
            </li>
            {/* <li>
              <a href="#">
                <span class="fas fa-clipboard"></span>
                <span>Task</span>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      <div class="main-wrapper">
        <div class="main-content">
          <header>
            <h2 className="heading" id="dashboard">
              Dashboard
            </h2>
            {/* <label htmlFor="nav-toggle">
              <span className="fas fa-bars"></span>
            </label> */}
            {/* <div className="search">
              <div className="search-rotate">
                <div className="icon"></div>
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="search"
                  id="mysearch"
                  autoComplete="off"
                //   onKeyDown={(e) => display(e.target)}
                />
              </div>
            </div> */}
            {/* <div className="user-wrapper">
              <img
                src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                alt=""
              />
              <div>
                <h4>LiquidTime</h4>
                <b>C E O</b>
              </div>
            </div> */}
          </header>

          <main>
            {/* <!-- <div id="pop-wrap">
                    <h1 class="pop-up">Light Mode Activated</h1>
                </div> --> */}
            {/* <div class="switch" id="switch">
              <div id="toggle">
                <i class="fas fa-moon"></i>
                <i class="fas fa-sun"></i>
                <i class="indicator"></i>
              </div>
            </div> */}
            
            <div class="cards">
              <div class="card-single">
                <div>
                  <h1 id="customer"></h1>
                  <span>Happy Clients</span>
                </div>
                <div>
                  <span class="fas fa-users"></span>
                </div>
              </div>
              <div class="card-single">
                <div>
                  <h1 id="project"></h1>
                  <span>Current Price</span>
                </div>
                <div>
                  <span class="fas fa-clipboard"></span>
                </div>
              </div>
              <div class="card-single">
                <div>
                  <h1 id="order"></h1>
                  <span>Total investment</span>
                </div>
                <div>
                  <span class="fas fa-shopping-bag"></span>
                </div>
              </div>
              <div class="card-single">
                <div>
                  <h1>
                    <sup>$</sup>
                    <p id="income">
                      <b>k</b>
                    </p>
                  </h1>
                  <span>Balance Remaining</span>
                </div>
                <div>
                  <span class="fab fa-google-wallet"></span>
                </div>
              </div>
            </div>
            <div class="recent-grid">
              <div class="projects">
                <div class="card">
                  <div class="card-header">
                    <h3 class="heading">Recent Projects</h3>
                    <button>
                      See all <span class="fas fa-arrow-right"></span>
                    </button>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>Project Title</td>
                            <td>Department</td>
                            <td>Status</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>UI/UX Design</td>
                            <td>UI Team</td>
                            <td>
                              <span class="status purple"></span>review
                            </td>
                          </tr>
                          <tr>
                            <td>Web Dev</td>
                            <td>Frontend</td>
                            <td>
                              <span class="status pink"></span>pending
                            </td>
                          </tr>
                          <tr>
                            <td>Ushop App</td>
                            <td>Mobile Team</td>
                            <td>
                              <span class="status orange"></span>active
                            </td>
                          </tr>
                          <tr>
                            <td>UI/UX Design</td>
                            <td>UI Team</td>
                            <td>
                              <span class="status purple"></span>review
                            </td>
                          </tr>
                          <tr>
                            <td>Web Dev</td>
                            <td>Frontend</td>
                            <td>
                              <span class="status pink"></span>pending
                            </td>
                          </tr>
                          <tr>
                            <td>Ushop App</td>
                            <td>Mobile Team</td>
                            <td>
                              <span class="status orange"></span>active
                            </td>
                          </tr>
                          <tr>
                            <td>UI/UX Design</td>
                            <td>UI Team</td>
                            <td>
                              <span class="status purple"></span>review
                            </td>
                          </tr>
                          <tr>
                            <td>Web Dev</td>
                            <td>Frontend</td>
                            <td>
                              <span class="status pink"></span>pending
                            </td>
                          </tr>
                          <tr>
                            <td>Ushop App</td>
                            <td>Mobile Team</td>
                            <td>
                              <span class="status orange"></span>active
                            </td>
                          </tr>
                          <tr>
                            <td>UI/UX Design</td>
                            <td>UI Team</td>
                            <td>
                              <span class="status purple"></span>review
                            </td>
                          </tr>
                          <tr>
                            <td>Web Dev</td>
                            <td>Frontend</td>
                            <td>
                              <span class="status pink"></span>pending
                            </td>
                          </tr>
                          <tr>
                            <td>Ushop App</td>
                            <td>Mobile Team</td>
                            <td>
                              <span class="status orange"></span>active
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="customers">
                <div class="card">
                  <div class="card-header">
                    <h3 class="heading">New customer</h3>
                    <button>
                      Sell all<span class="fas fa-arrow-right"></span>
                    </button>
                  </div>

                  <div class="card-body">
                    <div class="customer">
                      <div class="info">
                        <img
                          src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                          alt=""
                        />
                        <div>
                          <h4>lion Emusky</h4>
                          <small>CEO @ TLS</small>
                        </div>
                      </div>
                      <div class="contact">
                        <span class="fas fa-user-circle"></span>
                        <span class="fas fa-comment"></span>
                        <span class="fas fa-phone"></span>
                      </div>
                    </div>

                    <div class="customer">
                      <div class="info">
                        <img
                          src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                          alt=""
                        />
                        <div>
                          <h4>Ion Emusky</h4>
                          <small>C0O @ AFK</small>
                        </div>
                      </div>
                      <div class="contact">
                        <span class="fas fa-user-circle"></span>
                        <span class="fas fa-comment"></span>
                        <span class="fas fa-phone"></span>
                      </div>
                    </div>

                    <div class="customer">
                      <div class="info">
                        <img
                          src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                          alt=""
                        />
                        <div>
                          <h4>El-lion musky</h4>
                          <small>CEO @ FOMO</small>
                        </div>
                      </div>
                      <div class="contact">
                        <span class="fas fa-user-circle"></span>
                        <span class="fas fa-comment"></span>
                        <span class="fas fa-phone"></span>
                      </div>
                    </div>

                    <div class="customer">
                      <div class="info">
                        <img
                          src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                          alt=""
                        />
                        <div>
                          <h4>John Bezos</h4>
                          <small>CEO @ Mazon</small>
                        </div>
                      </div>
                      <div class="contact">
                        <span class="fas fa-user-circle"></span>
                        <span class="fas fa-comment"></span>
                        <span class="fas fa-phone"></span>
                      </div>
                    </div>

                    <div class="customer">
                      <div class="info">
                        <img
                          src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                          alt=""
                        />
                        <div>
                          <h4>Beelz Gai8</h4>
                          <small>CEO @ Mycroft</small>
                        </div>
                      </div>
                      <div class="contact">
                        <span class="fas fa-user-circle"></span>
                        <span class="fas fa-comment"></span>
                        <span class="fas fa-phone"></span>
                      </div>
                    </div>

                    <div class="customer">
                      <div class="info">
                        <img
                          src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                          alt=""
                        />
                        <div>
                          <h4>Jeam Krook</h4>
                          <small>CEO @ Penapple</small>
                        </div>
                      </div>
                      <div class="contact">
                        <span class="fas fa-user-circle"></span>
                        <span class="fas fa-comment"></span>
                        <span class="fas fa-phone"></span>
                      </div>
                    </div>

                    <div class="customer">
                      <div class="info">
                        <img
                          src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                          alt=""
                        />
                        <div>
                          <h4>Cris Coya</h4>
                          <small>CEO @ PenCode</small>
                        </div>
                      </div>
                      <div class="contact">
                        <span class="fas fa-user-circle"></span>
                        <span class="fas fa-comment"></span>
                        <span class="fas fa-phone"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* <div class="footer">
            <div class="word">
              <p>
                Made with{" "}
                <span id="hrt">
                  <i class="far fa-heart"></i>
                </span>{" "}
                | PULSE 2022
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <video
        class="video-1"
        src="https://res.cloudinary.com/liquidtime/video/upload/v1655385934/abstract_fihenv.mp4"
        loop
        muted
        autoplay
      ></video>
      <video
        class="video-2"
        src="https://res.cloudinary.com/liquidtime/video/upload/v1655385877/dark_wave_irg2pp.mp4"
        loop
        muted
        autoplay
      ></video>
      {/* </input> */}
    </div>
  );
}
