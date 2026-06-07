import React from "react";

import Hero from "./Hero";
import Brokerage from "./Brokerage";

import OpenAccount from "../../components/OpenAccount";

function PricingPage() {
  return (
    <div
      style={{
        background: "#050816",
        minHeight: "100vh",
      }}
    >

      {/* HERO SECTION */}

      <Hero />

      {/* BROKERAGE SECTION */}

      <div className="py-5">
        <Brokerage />
      </div>

      {/* CTA SECTION */}

      <div className="py-5">
        <OpenAccount />
      </div>

    </div>
  );
}

export default PricingPage;