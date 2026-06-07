import React from "react";
import {
  FaUserPlus,
  FaUser,
  FaChartLine,
  FaIndianRupeeSign,
  FaCoins,
} from "react-icons/fa6";

const supportData = [
  {
    icon: <FaUserPlus />,
    title: "Account Opening",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "NRI Account Opening",
      "Charges at Tradeonix",
      "Getting Started",
    ],
  },

  {
    icon: <FaUser />,
    title: "Your Account",
    links: [
      "Login Credentials",
      "Profile Settings",
      "Bank Details",
      "Segment Activation",
      "Share Transfers",
    ],
  },

  {
    icon: <FaChartLine />,
    title: "Trading & Markets",
    links: [
      "Trading FAQs",
      "Margin & Leverage",
      "Kite Web & Mobile",
      "API Trading",
      "GTT Orders",
    ],
  },

  {
    icon: <FaIndianRupeeSign />,
    title: "Funds",
    links: [
      "Add Money",
      "Withdraw Funds",
      "Add Bank Account",
      "eMandates",
    ],
  },

  {
    icon: <FaCoins />,
    title: "Investments",
    links: [
      "Mutual Funds",
      "NPS",
      "Fixed Deposits",
      "Coin Features",
    ],
  },
];

function CreateTicket() {
  return (
    <section className="container py-5">

      {/* HEADER */}

      <div className="text-center mb-5">

        <p className="support-tag">
          SUPPORT CENTER
        </p>

        <h1 className="support-title">
          How can we help you today?
        </h1>

        <p className="support-subtitle">
          Explore help topics, create support tickets,
          and resolve issues instantly with Tradeonix Support.
        </p>
      </div>

      {/* SUPPORT GRID */}

      <div className="row g-4">

        {supportData.map((item, index) => (

          <div className="col-lg-4 col-md-6" key={index}>

            <div className="support-card h-100">

              <div className="support-icon">
                {item.icon}
              </div>

              <h4 className="mt-4 mb-4 text-white">
                {item.title}
              </h4>

              <div className="support-links">

                {item.links.map((link, i) => (
                  <a href="/" key={i}>
                    {link}
                  </a>
                ))}

              </div>
            </div>
          </div>

        ))}

      </div>
    </section>
  );
}

export default CreateTicket;