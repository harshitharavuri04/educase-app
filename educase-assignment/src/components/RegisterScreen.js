import React, { useState } from "react";
import "../styles/RegisterScreen.css";

const RegisterScreen = ({ onFormSubmit, formData }) => {
  const [fullName, setFullName] = useState(formData.fullName || "");
  const [phone, setPhone] = useState(formData.phone || "");
  const [email, setEmail] = useState(formData.email || "");
  const [password, setPassword] = useState(formData.password || "");
  const [company, setCompany] = useState(formData.company || "");
  const [isAgency, setIsAgency] = useState(formData.isAgency || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({
      fullName,
      phone,
      email,
      password,
      company,
      isAgency,
    });
  };

  return (
    <div className="register-screen">
      <div className="register-header">
        <h1 className="register-title">
          Create your PopX account
          <span className="step-indicator">1</span>
        </h1>
      </div>

      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-fields-container">
          <div className="form-group">
            <label className="form-label">Full Name*</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone number*</label>
            <input
              type="tel"
              className="form-input"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email address*</label>
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
            <label className="form-label">Password*</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Company name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Are you an Agency?</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="agency"
                  checked={isAgency === true}
                  onChange={() => setIsAgency(true)}
                />
                <span className="radio-custom"></span>
                Yes
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="agency"
                  checked={isAgency === false}
                  onChange={() => setIsAgency(false)}
                />
                <span className="radio-custom"></span>
                No
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-create">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default RegisterScreen;
