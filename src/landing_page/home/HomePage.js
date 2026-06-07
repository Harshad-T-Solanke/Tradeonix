import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../../components/OpenAccount.js'

function HomePage() {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >

      <Hero />

      <div className="py-5">
        <Stats />
      </div>

      <div className="py-5">
        <Awards />
      </div>

      <div className="py-5">
        <Pricing />
      </div>

      <div className="py-5">
        <Education />
      </div>

      <OpenAccount />

    </div>
  );
}
export default HomePage;