import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [info, setInfo] = useState({ email: "", password: "" });

  const onChangeHandler = (key, text) => {
    setInfo((prev) => ({ ...prev, [key]: text }));
  };

  return (
    <div className="login-container">
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>
      <div className="shape shape4"></div>
      <div className="shape shape5"></div>
      <div className="shape shape6"></div>
      <div className="shape shape8"></div>
      <div className="shape shape9"></div>

      <div className="content">
        <div className="form-content">
          <form className="login-form">
            <h1>Login</h1>
            <label>Enter your email:</label>
            <input
              onChange={(e) => onChangeHandler("email", e.target.value)}
              type="email"
            />
            <label>Enter your password:</label>
            <input
              onChange={(e) => onChangeHandler("password", e.target.value)}
              type="password"
            />
            <button className="login-btn" onClick={(e) => e.preventDefault()}>
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
