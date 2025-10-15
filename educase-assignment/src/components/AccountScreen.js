import React from "react";
import "../styles/AccountScreen.css";

const AccountScreen = ({ formData }) => {
  return (
    <div className="account-screen">
      <div className="account-header">
        <h1 className="account-title">Account Settings</h1>
      </div>

      <div className="profile-section">
        <div className="profile-info">
          <div className="profile-avatar">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E"
              alt="Profile"
              className="avatar-image"
            />
            <div className="online-indicator"></div>
          </div>
          <div className="profile-details">
            <h2 className="profile-name">{formData.fullName || "Marry Doe"}</h2>
            <p className="profile-email">
              {formData.email || "Marry@Gmail.Com"}
            </p>
          </div>
        </div>
      </div>

      <div className="account-description">
        <p>
          Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default AccountScreen;
