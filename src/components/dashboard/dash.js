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
                    <h3 class="heading">Recent Stocks</h3>
                    <button>
                      See all <span class="fas fa-arrow-right"></span>
                    </button>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                             <td><b>Coin</b></td>
                            <td><b>Buy Price</b></td>
                            <td><b> Current Price</b></td>
                            {/* <td><b> Current Price</b></td> */}
                            
                          </tr>
                        </thead>
                        <tbody>
                          {/* <tr>
                          <td>Buy Price</td>
                            <td>Current Price</td>
                            <td>
                              <span class="status purple"></span>review
                            </td>
                            <button>Sell</button>
                          </tr> */}
                          <tr>
                          <img
                          src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                          alt=""
                        />
                        <span>  BTC</span>
                       
                          <td>₹2,326,245.00</td>
                            <td>₹2,495,486.00</td>
                           
                            <td class="card-header">
                              <button>Buy</button>
                            </td>
                          </tr>

                          <tr>
                          <img
                          src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                          alt=""
                        />
                        <span>  BNB</span>
                       
                          <td>₹2,326,245.00</td>
                            <td>₹2,495,486.00</td>
                           
                            <td class="card-header">
                              <button>Buy</button>
                            </td>
                          </tr>

                          <tr>
                          <img
                          src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                          alt=""
                        />
                        <span>  ETH</span>
                       
                          <td>₹2,326,245.00</td>
                            <td>₹2,495,486.00</td>
                           
                            <td class="card-header">
                              <button>Buy</button>
                            </td>
                          </tr>
                        
                          <tr>
                          <img
                          src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                          alt=""
                        />
                        <span>  ADA</span>
                       
                          <td>₹2,326,245.00</td>
                            <td>₹2,495,486.00</td>
                           
                            <td class="card-header">
                              <button>Buy</button>
                            </td>
                          </tr>
                         
                          <tr>
                          <img
                          src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                          alt=""
                        />
                        <span>  USDC</span>
                       
                          <td>₹2,326,245.00</td>
                            <td>₹2,495,486.00</td>
                           
                            <td class="card-header">
                              <button>Buy</button>
                            </td>
                          </tr>

                          <tr>
                          <img
                          src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                          alt=""
                        />
                        <span>  USDT</span>
                       
                          <td>₹2,326,245.00</td>
                            <td>₹2,495,486.00</td>
                           
                            <td class="card-header">
                              <button>Buy</button>
                            </td>
                          </tr>

                          <tr>
                          <img
                          src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                          alt=""
                        />
                        <span>  XRP</span>
                       
                          <td>₹2,326,245.00</td>
                            <td>₹2,495,486.00</td>
                           
                            <td class="card-header">
                              <button>Buy</button>
                            </td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </main>
        
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
