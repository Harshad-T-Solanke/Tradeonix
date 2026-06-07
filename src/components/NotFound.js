import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#111827,#1e293b)",
        overflow: "hidden",
        position: "relative",
      }}
    >

      {/* BACKGROUND GLOW */}

      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "#00d4ff",
          borderRadius: "50%",
          filter: "blur(180px)",
          opacity: 0.15,
          top: "-100px",
          left: "-100px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "#7c3aed",
          borderRadius: "50%",
          filter: "blur(180px)",
          opacity: 0.15,
          bottom: "-100px",
          right: "-100px",
        }}
      />

      {/* MAIN CARD */}

      <div
        className="glass text-center p-5"
        style={{
          width: "90%",
          maxWidth: "700px",
          zIndex: 10,
        }}
      >

        <h1
          style={{
            fontSize: "8rem",
            fontWeight: "800",
            background:
              "linear-gradient(90deg,#00d4ff,#7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </h1>

        <h2
          className="fw-bold mt-3"
          style={{ color: "#fff" }}
        >
          Page Not Found
        </h2>

        <p
          className="mt-4"
          style={{
            color: "#94a3b8",
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          The page you're looking for doesn't exist or has been moved.
          Please check the URL or return back to the homepage.
        </p>

        {/* BUTTONS */}

        <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">

          <Link to="/">
            <button className="primary-btn">
              Back To Home
            </button>
          </Link>

          <Link to="/support">
            <button
              className="btn btn-outline-light px-4 py-3"
              style={{
                borderRadius: "12px",
              }}
            >
              Contact Support
            </button>
          </Link>

        </div>

        {/* SMALL TEXT */}

        <p
          className="mt-5"
          style={{
            color: "#64748b",
            fontSize: "14px",
          }}
        >
          Tradeonix • Smart Trading Experience
        </p>
      </div>
    </div>
  );
}

export default NotFound;