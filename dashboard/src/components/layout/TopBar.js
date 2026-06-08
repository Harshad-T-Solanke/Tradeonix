import React from "react";
import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

const TopBar = () => {
  const userName =
    localStorage.getItem("name") || "Trader";

  return (
    <div className="topbar-container">

      <div className="market-section">

        <div className="market-status">
          🟢 Market Open
        </div>

        <div className="market-card">
          <span>NIFTY</span>
          <span className="positive">
            +0.84%
          </span>
        </div>

        <div className="market-card">
          <span>SENSEX</span>
          <span className="positive">
            +0.62%
          </span>
        </div>

      </div>

      <div className="search-container">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search stocks..."
        />

      </div>

      <div className="topbar-right">

        <FaBell className="topbar-icon" />

        <div className="profile-box">

          <FaUserCircle />

          <span>{userName}</span>

        </div>

      </div>

    </div>
  );
};

export default TopBar;