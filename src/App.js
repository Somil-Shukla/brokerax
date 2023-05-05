import React from "react";
import Home from "./components/Home/Render file/RenderHomePage";
import AboutUs from "./components/About Us/Render file/RenderAboutUs";
import ContactUs from "./components/Contact Us/Render file/RenderContactUs";
import Markets from "./components/Markets/Render file/RenderMarket";
import Header from "./components/Header/Code/header";
 import SimpleFooter from "./components/Footer/Code/footer";
import SignupForm from "./components/login sign up/login";
import LoginForm from "./components/login sign up/sign up";

 import { BrowserRouter as Router, Switch, Route,Routes } from "react-router-dom";


export default function App() {
  return (
    <div>
     <Router>
      <Routes>
      <Route exact path="/" element={<Header />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/AboutUs" element={<AboutUs/>} />
          <Route exact path="/Markets" element={<Markets/>} />
        <Route exact path="/ContactUs" element={<ContactUs/>} /> 
        <Route exact path="/SimpleFooter" element={<SimpleFooter/>} /> 
        </Routes>
      
      </Router>
    </div>
  );
}


