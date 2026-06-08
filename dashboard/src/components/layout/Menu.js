import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaChartPie,
  FaChartLine,
  FaClipboardList,
  FaWallet,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaUserCircle,
  FaEye,
  FaUser,
  FaBell,
  FaHistory,
  FaChartArea,
  FaCog,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import ThemeContext
from "../../context/ThemeContext";

import {
  useContext,
} from "react";

import "./sidebar.css";

function Menu() {

  const userName =
    localStorage.getItem("name") || "Trader";

  const { theme, toggleTheme } = useContext(ThemeContext);

const handleLogout = () => {

  localStorage.clear();

  window.location.href =
    "http://localhost:3001/login";
};

  return (
    <aside className="sidebar">

    

      <div className="sidebar-logo">

        <div className="logo-circle">
          T
        </div>

        <div>
          <h2>Tradeonix</h2>
          <p>Trading Terminal</p>
        </div>

      </div>

      

      <div className="market-status-card">

        <span className="market-dot"></span>

        <div>
          <h5>Market Open</h5>
          <p>Live Trading Active</p>
        </div>

      </div>

      

      <div className="sidebar-menu">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaChartPie />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaClipboardList />
          <span>Orders</span>
        </NavLink>

        <NavLink
          to="/holdings"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaWallet />
          <span>Holdings</span>
        </NavLink>

        <NavLink
          to="/positions"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaExchangeAlt />
          <span>Positions</span>
        </NavLink>

        <NavLink
          to="/funds"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaMoneyBillWave />
          <span>Funds</span>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive
              ? "menu-item active"
              : "menu-item"
          }
        >
          <FaChartLine />
          <span>Analytics</span>
        </NavLink>

        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaWallet />
          <span>Portfolio</span>
        </NavLink>

        <NavLink
          to="/market"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaChartLine />
          <span>Market</span>
        </NavLink>

        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaClipboardList />
          <span>News</span>
        </NavLink>
        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive
              ? "menu-item active"
              : "menu-item"
          }
        >
          <FaBell />
          <span>Notifications</span>
        </NavLink>

        <NavLink
          to="/trade-history"
          className={({ isActive }) =>
            isActive
              ? "menu-item active"
              : "menu-item"
          }
        >
          <FaHistory />
          <span>Trade History</span>
        </NavLink>

        <NavLink
          to="/portfolio-performance"
          className={({ isActive }) =>
            isActive
              ? "menu-item active"
              : "menu-item"
          }
        >
          <FaChartArea />
          <span>Performance</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "menu-item active"
              : "menu-item"
          }
        >
          <FaCog />
          <span>Settings</span>
        </NavLink>

      </div>

       <button
  className="theme-btn"
  onClick={toggleTheme}
>
  {
    theme === "dark"
      ? <FaSun />
      : <FaMoon />
  }
</button>

      {/* PROFILE */}
      <div className="sidebar-footer">

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "menu-item active"
              : "menu-item"
          }
        >
          <FaUser />
          <span>Profile</span>
        </NavLink>

        <div className="sidebar-profile">

          <div className="profile-avatar">
            <FaUserCircle />
          </div>

          <div className="profile-info">
            <h5>{userName}</h5>
            <p>Active Trader</p>
          </div>

        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Menu;