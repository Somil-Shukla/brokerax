import React from "react";
import "./login.css";
// import './page-specific-styles.css';

function SignupForm() {
  return (
    <div id="container">
      <header>Become a Member</header>
      <form method="post">
        <fieldset>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Full Name"
            required
            autoFocus
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            required
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
          <br />
          <br />
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm Password"
            required
          />
          <br />
          <br />
          <br />
          <br />
          <label htmlFor="submit"></label>
          <input type="submit" name="submit" id="submit" value="REGISTER" />
        </fieldset>
      </form>
    </div>
  );
}

export default SignupForm;
