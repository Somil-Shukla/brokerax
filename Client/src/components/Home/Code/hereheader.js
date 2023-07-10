// import React from "react";
// // import "../Style/header.css";
// // import "../../Header/Style/header.css";
// import "../Style/hereheader.css";
// import logo from "..//..//../images/Logo2.png";

// export default function Header() {
//   return (
//     <header className="header-fixed">
//       <div className="header-limiter">
//         <img src={logo} alt="Logo" className="logo-header" />
//         <nav className="header-nav">
//           <a href="#">Home</a>
//           <a href="Markets">Markets</a>
//           <a href="AboutUs">About Us</a>
//           <a href="ContactUs">Contact Us</a>
//           <button className="header-button">
//             <a href="signup">Log In/Sign Up</a> &rarr;
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// }
import React from "react";
import logo from "..//..//../images/Logo2.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-md py-4 px-6 md:py-6 md:px-12 z-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <img src={logo} alt="Logo" className="w-16 md:w-24" />
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="Markets" className="text-white hover:text-gray-200">
            Markets
          </a>
          <a href="AboutUs" className="text-white hover:text-gray-200">
            About Us
          </a>
          <a href="ContactUs" className="text-white hover:text-gray-200">
            Contact Us
          </a>
        </nav>
        <button className="hidden md:block bg-red-500 text-white font-medium py-2 px-4 rounded">
          <a href="signup">Log In/Sign Up</a>
        </button>
      </div>
    </header>
  );
}
