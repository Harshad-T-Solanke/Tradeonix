import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Team() {
  return (
    <section className="container py-5">

     

      <div className="text-center mb-5">

        <div className="trade-badge mb-4">
          👨‍💻 Leadership
        </div>

        <h1
          className="fw-bold"
          style={{
            fontSize: "3rem",
          }}
        >
          Meet The
          <span className="gradient-text"> Visionary </span>
          Behind Tradeonix
        </h1>

        <p
          className="mx-auto mt-4"
          style={{
            maxWidth: "700px",
            color: "#94a3b8",
            lineHeight: "1.8",
          }}
        >
          Building the next-generation trading ecosystem focused on
          simplicity, speed, and innovation for modern investors.
        </p>
      </div>

     

      <div className="team-card">

        <div className="row align-items-center">

          

          <div className="col-md-5 text-center mb-5 mb-md-0">

            <div className="team-image-wrapper">

              <img
                src="media/images/nithinKamath.jpg"
                alt="Founder"
                className="team-image"
              />

            </div>

            <h3 className="mt-4 text-white fw-bold">
              Harshad Solanke
            </h3>

            <p style={{ color: "#00d4ff" }}>
              Founder & Full Stack Developer
            </p>

           

            <div className="d-flex justify-content-center gap-3 mt-4">

              <div className="glass-icon">
                <FaTwitter />
              </div>

              <div className="glass-icon">
                <FaLinkedin />
              </div>

              <div className="glass-icon">
                <FaGithub />
              </div>

            </div>
          </div>

          

          <div className="col-md-7">

            <div className="team-content">

              <h2 className="text-white mb-4">
                Building The Future Of Trading
              </h2>

              <p>
                Tradeonix was created with the vision of building a
                modern, intelligent, and accessible trading platform
                for everyone.
              </p>

              <p>
                Inspired by real-world fintech ecosystems, Tradeonix
                combines performance, clean design, and powerful
                trading tools into one seamless experience.
              </p>

              <p>
                The mission is simple — empower traders and investors
                with next-generation technology, real-time analytics,
                and a premium investing experience.
              </p>

            

              <div className="row mt-5">

                <div className="col-4">
                  <div className="mini-card text-center">
                    <h2>1M+</h2>
                    <p>Trades Processed</p>
                  </div>
                </div>

                <div className="col-4">
                  <div className="mini-card text-center">
                    <h2>99.9%</h2>
                    <p>Platform Uptime</p>
                  </div>
                </div>

                <div className="col-4">
                  <div className="mini-card text-center">
                    <h2>24/7</h2>
                    <p>Market Insights</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;