import React from "react";
import "../css/Welcome.css";

const Welcome = () => {
  return (
    <div className="landing-screen-container">
      <div className="content-box">
        <div className="welcome-text-block">
          <h2>Welcome to PopX</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="button-container">
          <button className="create-account-button">Create Account</button>
          <button className="login-button">Already Registered? Login</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
