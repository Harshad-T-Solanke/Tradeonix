import React,
{
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";


const TopBar = () => {

  const userName =
    localStorage.getItem("name") ||
    "Trader";

  const [indices,
    setIndices] =
    useState({
      nifty: null,
      sensex: null,
    });

    const [searchTerm, setSearchTerm] =
  useState("");

const [searchResult, setSearchResult] =
  useState(null);

  useEffect(() => {

    axios
      .get(
        "http://localhost:3002/indices"
      )
      .then((res) => {

        setIndices(
          res.data
        );

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  const handleSearch = async (e) => {

    if (e.key !== "Enter") return;

    try {

      const symbol =
        searchTerm.toUpperCase();

      const res =
        await axios.get(
          `http://localhost:3002/market/${symbol}`
        );

      setSearchResult(res.data);

    } catch (err) {

      console.log(err);

      alert("Stock not found");

    }

  };

  return (

    <div className="topbar-container">

      <div className="market-section">

        <div className="market-status">
           Market Open
        </div>

        <div className="market-card">

          <span>
            NIFTY
          </span>

          <span>
            ₹
            {
              indices.nifty?.price?.toFixed(
                0
              ) || "--"
            }
          </span>

          <span
            className={
              Number(
                indices.nifty?.percent
              ) >= 0
                ? "positive"
                : "loss"
            }
          >
            {
              indices.nifty?.percent
            }%
          </span>

        </div>

        <div className="market-card">

          <span>
            SENSEX
          </span>

          <span>
            ₹
            {
              indices.sensex?.price?.toFixed(
                0
              ) || "--"
            }
          </span>

          <span
            className={
              Number(
                indices.sensex?.percent
              ) >= 0
                ? "positive"
                : "loss"
            }
          >
            {
              indices.sensex?.percent
            }%
          </span>

        </div>

      </div>

      <div className="search-container">

        <FaSearch
          className="search-icon"
        />

        <input
          type="text"
          placeholder="Search TCS, INFY, RELIANCE..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          onKeyDown={handleSearch}
        />

        {
  searchResult && (

    <div className="stock-search-result">

      <h4>
        {searchResult.symbol}
      </h4>

      <p>
        ₹{searchResult.price}
      </p>

      <span
        className={
          searchResult.isDown
            ? "loss"
            : "positive"
        }
      >
        {searchResult.percent}
      </span>

    </div>

  )
}

      </div>

      <div className="topbar-right">

        <div className="profile-box">

          <FaUserCircle />

          <span>
            {userName}
          </span>

        </div>

      </div>

    </div>

  );
};

export default TopBar;