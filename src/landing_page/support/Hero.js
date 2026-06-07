import React from "react";
import {
  FaSearch,
  FaTicketAlt,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="container py-5">

      <div className="support-hero-card">

        {/* GLOW EFFECTS */}

        <div className="support-glow-1"></div>
        <div className="support-glow-2"></div>

        <div className="position-relative" style={{ zIndex: 2 }}>

          {/* TOP BAR */}

          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-5">

            <div>
              <p className="support-tag">
                TRADEONIX SUPPORT
              </p>

              <h1 className="support-title">
                How can we help you?
              </h1>
            </div>

            <button className="neo-primary-btn">
              <FaTicketAlt className="me-2" />
              Track Tickets
            </button>
          </div>

          {/* SEARCH BAR */}

          <div className="support-search-box">

            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search for help, tickets, trading queries..."
            />
          </div>

          {/* QUICK LINKS */}

          <div className="support-links mt-4">

            <a href="">
              Account Opening
            </a>

            <a href="">
              Segment Activation
            </a>

            <a href="">
              Intraday Margins
            </a>

            <a href="">
              Trading Manual
            </a>

          </div>

          {/* FEATURED SECTION */}

          <div className="row mt-5 g-4">

            <div className="col-md-6">

              <div className="support-feature-card">

                <p className="feature-label">
                  TRENDING
                </p>

                <h4>
                  Current Market Updates &
                  Trading Notices
                </h4>

                <p>
                  Stay updated with important announcements,
                  exchange circulars, and platform updates.
                </p>

                <button className="feature-btn">
                  Read More
                  <FaArrowRight />
                </button>

              </div>
            </div>

            <div className="col-md-6">

              <div className="support-feature-card">

                <p className="feature-label">
                  HELP CENTER
                </p>

                <h4>
                  Beginner Trading Guides
                </h4>

                <p>
                  Learn investing, intraday trading,
                  options strategies, and portfolio management.
                </p>

                <button className="feature-btn">
                  Explore Guides
                  <FaArrowRight />
                </button>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;