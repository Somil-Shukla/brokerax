import React from "react";
import Home from "./components/Home/Render file/RenderHomePage";
import AboutUs from "./components/About Us/Render file/RenderAboutUs";
import ContactUs from "./components/Contact Us/Render file/RenderContactUs";
import Markets from "./components/Markets/Render file/RenderMarket";
import Header from "./components/Header/Code/header";
import Footer from "./components/Footer/Code/footer";
import SignupForm from "./components/login sign up/login";
import LoginForm from "./components/login sign up/sign up";

export default function App() {
  return (
    <div className="App">
      {/* <Header />
      <Home />
      <AboutUs />
      <Markets />
      <ContactUs />
      <Footer /> */}
      {/* <SignupForm /> */}
      <LoginForm />
    </div>
  );
}
