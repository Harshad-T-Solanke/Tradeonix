import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <div className="container-fluid">

      <Hero />

      <LeftSection
        imageURL="/media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with advanced charts, real-time market data, and seamless trading experience."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      <RightSection
        imageURL="/media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Tradeonix account with portfolio insights and analytics."
        learnMore="#"
      />

      <LeftSection
        imageURL="/media/images/coin.png"
        productName="Coin"
        productDescription="Invest in direct mutual funds commission-free with a modern investing experience."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      <RightSection
        imageURL="/media/images/kiteconnect.png"
        productName="Tradeonix API"
        productDescription="Build modern trading experiences using our powerful developer APIs."
        learnMore="#"
      />

      <LeftSection
        imageURL="/media/images/varsity.png"
        productName="Tradeonix Learn"
        productDescription="Learn trading, investing, and portfolio management with interactive educational content."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      <div className="text-center my-5">
        <p className="text-secondary-custom">
          Want to know more about our technology stack?
        </p>

        <a
          href="#"
          className="gradient-text fw-bold"
          style={{ textDecoration: "none" }}
        >
          Visit Tradeonix.tech
        </a>
      </div>

      <Universe />

    </div>
  );
}

export default ProductsPage;

