import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Education() {
  return (
    <section className="container py-5">

      <div className="row align-items-center education-section">

        {/* IMAGE SIDE */}

        <div className="col-lg-6 text-center mb-5 mb-lg-0">

          <div className="education-image-wrapper">

            <img
              src="/media/images/education.svg"
              alt="Education"
              className="img-fluid education-image"
            />

          </div>

        </div>

     

        <div className="col-lg-6">

          <div className="education-content">

            <span className="education-badge">
              Learn & Grow
            </span>

            <h1 className="mt-4 fw-bold">
              Master Trading With
              <span className="gradient-text"> Free Market Education</span>
            </h1>

            <p className="education-text mt-4">
              Access premium learning resources designed for beginners
              and professional traders. Learn everything from stock market
              basics to advanced trading strategies.
            </p>

           

            <div className="education-card mt-5">

              <h4>📘 Tradeonix Varsity</h4>

              <p>
                Interactive trading modules, investment concepts,
                technical analysis, and risk management tutorials.
              </p>

              <a href="">
                Explore Learning <FaArrowRight />
              </a>

            </div>

         

            <div className="education-card mt-4">

              <h4>💬 Trade Community</h4>

              <p>
                Join thousands of investors discussing market trends,
                trading psychology, and portfolio strategies.
              </p>

              <a href="">
                Join Community <FaArrowRight />
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;