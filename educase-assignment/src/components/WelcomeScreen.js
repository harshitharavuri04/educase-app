import React from "react";
import "../styles/WelcomeScreen.css";

const WelcomeScreen = ({ onCreateAccount, onLogin }) => {
  return (
    <div className="welcome-screen">
      <div className="dots-animation">
        <div className="dot dot-6">6</div>
        <div className="dot dot-1">1</div>
        <div className="dot dot-2">2</div>
        <div className="dot dot-3">3</div>
        <div className="dot dot-4">4</div>
        <div className="dot dot-5">5</div>
      </div>

      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <div className="welcome-buttons">
          <button className="btn btn-primary" onClick={onCreateAccount}>
            Create Account
          </button>
          <button className="btn btn-secondary" onClick={onLogin}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
