import React, { useState } from "react";
import "../styles/LoginScreen.css";

const LoginScreen = ({ onFormSubmit, formData }) => {
  const [email, setEmail] = useState(formData.email || "");
  const [password, setPassword] = useState(formData.password || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ email, password });
  };

  return (
    <div className="login-screen">
      <div className="login-header">
        <h1 className="login-title">Signin to your PopX account</h1>
        <p className="login-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-fields">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-input"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-login">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
