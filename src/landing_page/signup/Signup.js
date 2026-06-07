import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/signup", { name, email, password });
      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      alert("Signup failed!");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">

        {/* LEFT SIDE */}
        <div className="signup-left">
          <div className="signup-content">
            <p className="market-live">JOIN THE FUTURE OF INVESTING</p>
            <h1>
              Start Trading With
              <span className="gradient-text"> Tradeonix</span>
            </h1>
            <p>
              Experience next-generation investing with AI-powered analytics,
              real-time execution, and institutional-grade trading tools.
            </p>

            <div className="signup-features">
              <div className="signup-feature-card">
                <h3>₹0</h3>
                <p>Account Opening</p>
              </div>
              <div className="signup-feature-card">
                <h3>99.99%</h3>
                <p>Platform Uptime</p>
              </div>
              <div className="signup-feature-card">
                <h3>10M+</h3>
                <p>Daily Trades</p>
              </div>
            </div>

            <div className="signup-image-wrapper">
              <img src="/media/images/homeHero.png" alt="Trading Dashboard" className="signup-image" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="signup-right">
          <div className="signup-card">
            <h2 className="text-white fw-bold mb-4">Create Account</h2>
            <form onSubmit={handleSignup}>

              <div className="input-box mb-4">
                <FaUser className="input-icon" />
                <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} required />
              </div>

              <div className="input-box mb-4">
                <FaEnvelope className="input-icon" />
                <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div className="input-box mb-4">
                <FaLock className="input-icon" />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
              </div>

              <button type="submit" className="signup-main-btn">Create Account</button>

              <p className="signup-footer-text">
                Already have an account?
                <Link to="/login" className="signup-link"> Login</Link>
              </p>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SignUp;
