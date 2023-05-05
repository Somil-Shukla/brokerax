import React, { Component, useState } from "react";
import "./login.css";
// import './page-specific-styles.css';

function SignupForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "AdarshT") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };
  return (
    <div id="container">
      <header>Become a Member</header>
      <form method="post" onSubmit={handleSubmit}>
        <fieldset>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="First Name"
            onChange={(e) => setFname(e.target.value)}
            required
            autoFocus
          />
          <br />
          <br />
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="last-name"
            onChange={(e) => setLname(e.target.value)}
            required
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
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
