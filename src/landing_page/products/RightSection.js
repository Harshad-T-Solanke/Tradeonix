import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <section className="container py-5">

      <div className="row align-items-center g-5">

        {/* LEFT CONTENT */}

        <div className="col-lg-6">

          <div className="product-content-card">

            <div className="product-tag">
              TRADEONIX PRODUCT
            </div>

            <h1 className="product-title mt-4">
              {productName}
            </h1>

            <p className="product-description mt-4">
              {productDescription}
            </p>

            <div className="mt-4">

              <a
                href={learnMore}
                className="learn-more-btn"
              >
                Learn More →
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="col-lg-6 text-center">

          <div className="product-image-wrapper">

            <img
              src={imageURL}
              alt={productName}
              className="img-fluid product-image"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default RightSection;