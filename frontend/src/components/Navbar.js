import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine } from "react-icons/fa";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        position: "sticky",
        top: "15px",
        zIndex: "1000",
        padding: "0 20px",
      }}
    >
      <div
        className="container py-3 px-4"
        style={{
          background: "rgba(15, 23, 42, 0.75)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        }}
      >

     

        <Link
          className="navbar-brand d-flex align-items-center gap-2"
          to="/"
        >
          <div
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "12px",
              background:
                "linear-gradient(135deg,#00d4ff,#7c3aed)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "20px",
            }}
          >
            <FaChartLine />
          </div>

          <h3
            className="m-0 fw-bold"
            style={{
              background:
                "linear-gradient(90deg,#00d4ff,#7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Tradeonix
          </h3>
        </Link>

      

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

   

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto align-items-center gap-3">

            <li className="nav-item">
              <Link className="custom-nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="custom-nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="custom-nav-link" to="/product">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="custom-nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="custom-nav-link" to="/support">
                Support
              </Link>
            </li>

       

            <li className="nav-item">
              <Link
                className="btn login-btn px-4 py-2"
                to="/login"
              >
                Login
              </Link>
            </li>

       

            <li className="nav-item">
              <Link
                className="btn signup-btn px-4 py-2"
                to="/signup"
              >
                Get Started
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;