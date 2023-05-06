import React, { Component, useState } from "react";
import "./login.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "./userDetails";
        }
      });
  }
  return (
    <div id="container">
      <header>Become a Member</header>
      <form method="post" onSubmit={handleSubmit}>
        <fieldset>
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

export default LoginForm;
