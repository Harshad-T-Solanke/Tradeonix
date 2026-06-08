import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center text-white">
          We pioneered the future of investing.
          <br />
          Trade smarter with Tradeonix.
        </h1>
      </div>

      <div className="row pt-5 mt-5 border-top text-light">

        <div className="col-md-6 p-5">
          <img
            src="/media/images/trading.png"
            alt="Trading"
            className="img-fluid rounded-4"
          />
        </div>

        <div className="col-md-6 p-5">
          <p>
            Tradeonix is redefining the investing experience
            with modern technology, seamless execution,
            and next-generation trading tools.
          </p>

          <p>
            Built for modern investors who demand speed,
            analytics, and reliability.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;