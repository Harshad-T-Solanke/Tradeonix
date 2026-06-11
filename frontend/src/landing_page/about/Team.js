import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaCode,
} from "react-icons/fa";

function Team() {
  return (
    <section className="container py-5">

      <div className="text-center mb-5">
        <div className="trade-badge mb-4">
          🚀 Developer
        </div>

        <h1
          className="fw-bold"
          style={{
            fontSize: "3rem",
          }}
        >
          Meet The
          <span className="gradient-text"> Developer </span>
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
          Passionate about building modern fintech solutions using the
          MERN stack and creating seamless digital experiences for
          traders and investors.
        </p>
      </div>

      <div className="team-card">
        <div className="row align-items-center">

          <div className="col-md-5 text-center mb-5 mb-md-0">

            <div className="team-image-wrapper">
              <img
                src="media/images/harshad.jpg"
                alt="Harshad Solanke"
                className="team-image"
              />
            </div>

            <h3 className="mt-4 text-white fw-bold">
              Harshad Solanke
            </h3>

            <p style={{ color: "#00d4ff" }}>
              Full Stack Developer
            </p>

            <div className="d-flex justify-content-center gap-3 mt-4">

              <a
                href="https://linkedin.com/in/YOUR-LINKEDIN"
                target="_blank"
                rel="noreferrer"
                className="glass-icon"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/Harshad-T-Solanke"
                target="_blank"
                rel="noreferrer"
                className="glass-icon"
              >
                <FaGithub />
              </a>

              <div className="glass-icon">
                <FaCode />
              </div>

            </div>
          </div>

          <div className="col-md-7">
            <div className="team-content">

              <h2 className="text-white mb-4">
                Building The Future Of Trading
              </h2>

              <p>
                Tradeonix is a modern stock trading platform inspired
                by leading fintech applications and developed as a
                full-stack MERN project.
              </p>

              <p>
                The platform focuses on delivering a clean user
                experience, portfolio management, market insights,
                analytics, and intuitive trading workflows.
              </p>

              <p>
                Through Tradeonix, I aim to demonstrate strong skills
                in React.js, Node.js, Express.js, MongoDB, REST APIs,
                authentication, and modern UI development.
              </p>

              <div className="row mt-5">

                <div className="col-4">
                  <div className="mini-card text-center">
                    <h2>MERN</h2>
                    <p>Tech Stack</p>
                  </div>
                </div>

                <div className="col-4">
                  <div className="mini-card text-center">
                    <h2>15+</h2>
                    <p>Core Features</p>
                  </div>
                </div>

                <div className="col-4">
                  <div className="mini-card text-center">
                    <h2>100%</h2>
                    <p>Self Developed</p>
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