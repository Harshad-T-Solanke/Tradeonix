import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        background: "#050505",
        borderTop: "2px solid #00ff9d",
        marginTop: "100px",
      }}
    >
      <div className="container py-5">

        {/* TOP */}

        <div className="row gy-5">

          {/* LEFT */}

          <div className="col-lg-5">

            <div className="terminal-logo mb-4">
              TRADEONIX
            </div>

            <p className="footer-desc">
              Next-generation trading platform for modern investors.
              Trade stocks, ETFs, and crypto with lightning-fast execution
              and advanced analytics.
            </p>

            <div className="d-flex gap-3 mt-4">

              <div className="neo-icon">
                <FaTwitter />
              </div>

              <div className="neo-icon">
                <FaLinkedin />
              </div>

              <div className="neo-icon">
                <FaGithub />
              </div>

              <div className="neo-icon">
                <FaInstagram />
              </div>

            </div>

          </div>

          {/* CENTER */}

          <div className="col-lg-2">

            <h6 className="footer-heading">
              COMPANY
            </h6>

            <div className="neo-links">
              <a href="">About</a>
              <a href="">Products</a>
              <a href="">Pricing</a>
              <a href="">Careers</a>
            </div>

          </div>

          {/* RIGHT */}

          <div className="col-lg-2">

            <h6 className="footer-heading">
              RESOURCES
            </h6>

            <div className="neo-links">
              <a href="">Support</a>
              <a href="">Market API</a>
              <a href="">Documentation</a>
              <a href="">Community</a>
            </div>

          </div>

          {/* LEGAL */}

          <div className="col-lg-3">

            <h6 className="footer-heading">
              LEGAL
            </h6>

            <p className="legal-text">
              Investments in securities market are subject to market risks.
              Please read all related documents carefully before investing.
            </p>

            <p className="copyright-text">
              © 2026 Tradeonix Technologies Pvt. Ltd.
              All rights reserved.
            </p>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="footer-bottom">

          <div className="market-status">
            ● MARKET ACTIVE
          </div>

          <div className="footer-mini">
            Secure • Fast • Reliable
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;