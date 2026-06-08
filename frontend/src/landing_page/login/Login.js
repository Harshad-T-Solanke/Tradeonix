import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/login",
        {
          email,
          password,
        }
      );

      console.log(res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("userId",res.data.userId);
      localStorage.setItem("email", res.data.email);

      window.location.href =
  `http://localhost:3003/?userId=${res.data.userId}&name=${encodeURIComponent(res.data.name)}&email=${encodeURIComponent(res.data.email)}&token=${res.data.token}`;

    } catch (err) {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="login-page">

      <div className="login-left">

        <div className="login-content">

          <h1>
            Welcome Back to
            <span className="gradient-text"> Tradeonix</span>
          </h1>

          <p>
            Trade smarter with advanced analytics,
            lightning-fast execution, and real-time market insights.
          </p>
          <img
            src="/media/images/homeHero.png"
            alt="Trading Dashboard"
            className="login-image"
          />

        </div>
      </div>

      <div className="login-right">

        <div className="login-card">

          <h2 className="fw-bold text-white mb-4">
            Login
          </h2>

          <form onSubmit={handleLogin}>


            <div className="input-box">

              <FaEnvelope className="input-icon" />

              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-box mt-4">

              <FaLock className="input-icon" />

              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <p className="text-danger mt-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="primary-btn w-100 mt-4"
            >
              Login
            </button>

            <p
              className="mt-4 text-center"
              style={{ color: "#94a3b8" }}
            >
              Don’t have an account?
              <Link
                to="/signup"
                className="ms-2"
                style={{
                  color: "#00d4ff",
                  textDecoration: "none",
                }}
              >
                Signup
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;