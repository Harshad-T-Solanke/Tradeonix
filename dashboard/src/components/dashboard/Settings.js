import React, { useState } from "react";
import axios from "axios";

const Settings = () => {

  const name =
    localStorage.getItem("name");

  const email =
    localStorage.getItem("email");

  const userId =
    localStorage.getItem("userId");

  const [currentPassword,
    setCurrentPassword] =
    useState("");

  const [newPassword,
    setNewPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const handleLogout = () => {

    localStorage.clear();

    window.location.href =
      "http://localhost:3001/login";
  };

  const handlePasswordChange =
    async () => {

      if (
        newPassword !==
        confirmPassword
      ) {

        alert(
          "Passwords do not match"
        );

        return;
      }

      try {

        const res =
          await axios.post(
            "http://localhost:3002/changePassword",
            {
              userId,
              currentPassword,
              newPassword,
            }
          );

        alert(
          res.data.message
        );

        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");

      } catch (err) {

        alert(
          err.response?.data?.message ||
          "Password update failed"
        );

      }

    };

  return (
    <div className="settings-page">

      <h2>Settings</h2>

      <div className="settings-card">

        <h4>User Information</h4>

        <p>
          <strong>Name:</strong>
          {" "}
          {name}
        </p>

        <p>
          <strong>Email:</strong>
          {" "}
          {email}
        </p>

      </div>

      <div className="settings-card">

        <h4>Change Password</h4>

        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) =>
            setCurrentPassword(
              e.target.value
            )
          }
        />

        <br /><br />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) =>
            setNewPassword(
              e.target.value
            )
          }
        />

        <br /><br />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
        />

        <br /><br />

        <button
          className="buy-btn"
          onClick={
            handlePasswordChange
          }
        >
          Update Password
        </button>

      </div>

      <div className="settings-card">

        <h4>Account Actions</h4>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default Settings;