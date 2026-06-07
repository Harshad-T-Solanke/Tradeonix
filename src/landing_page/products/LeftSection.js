import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="container py-5">

      <div className="row align-items-center product-section">

        {/* IMAGE */}

        <div className="col-lg-6 mb-5 mb-lg-0">

          <div className="product-image-card">

            <img
              src={imageURL}
              alt={productName}
              className="img-fluid"
            />

          </div>

        </div>

        {/* CONTENT */}

        <div className="col-lg-6">

          <div className="product-content">

            <div className="product-tag mb-3">
              NEXT GEN TRADING
            </div>

            <h1 className="product-title">
              {productName}
            </h1>

            <p className="product-description">
              {productDescription}
            </p>

            {/* BUTTONS */}

            <div className="d-flex gap-3 flex-wrap mt-4">

              <a
                href={tryDemo}
                className="primary-product-btn"
              >
                Try Demo
              </a>

              <a
                href={learnMore}
                className="secondary-product-btn"
              >
                Learn More
              </a>

            </div>

            {/* STORE BUTTONS */}

            <div className="d-flex gap-4 mt-5 flex-wrap">

              <a href={googlePlay}>
                <img
                  src="/media/images/googlePlayBadge.svg"
                  alt="Google Play"
                  className="store-badge"
                />
              </a>

              <a href={appStore}>
                <img
                  src="/media/images/appstoreBadge.svg"
                  alt="App Store"
                  className="store-badge"
                />
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default LeftSection;