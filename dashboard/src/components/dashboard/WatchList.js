import axios from "axios";

import React, { useState, useContext, useEffect } from "react";
import { Tooltip, Grow } from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown, BarChartOutlined, MoreHoriz } from '@mui/icons-material'
import GeneralContext from '../../context/GeneralContext';
import { DoughnutChart } from "../charts/DoughnutChart";


const WatchList = () => {

  const handleAddStock = async () => {

    const stockName = prompt(
      "Enter Stock Symbol (TCS, INFY, RELIANCE)"
    );

    if (!stockName) return;

    const symbol =
      stockName.toUpperCase();

    try {

      const marketRes =
        await axios.get(
          `http://localhost:3002/market/${symbol}`
        );

      await axios.post(
        "http://localhost:3002/addWatchlist",
        {
          userId:
            localStorage.getItem("userId"),

          name: symbol,

          price:
            marketRes.data.price,
        }
      );

      window.location.reload();

    } catch (err) {

      console.log(err);

      alert(
        "Unable to add stock"
      );

    }

  };
  const [searchTerm, setSearchTerm] = useState("");

  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {

    const userId =
      localStorage.getItem("userId");

    axios
      .get(
        `http://localhost:3002/watchlist/${userId}`
      )
      .then(async (res) => {

        const stocks = res.data;

        const updatedStocks =
          await Promise.all(

            stocks.map(async (stock) => {

              try {

                const marketRes =
                  await axios.get(
                    `http://localhost:3002/market/${stock.name}`
                  );

                return {
                  ...stock,
                  price: marketRes.data.price,
                  percent: marketRes.data.percent,
                  isDown: marketRes.data.isDown,
                };

              } catch {

                return stock;

              }

            })

          );

        setWatchlist(updatedStocks);

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);
  useEffect(() => {

    const interval =
      setInterval(() => {

        window.location.reload();

      }, 60000);

    return () =>
      clearInterval(interval);

  }, []);

  const filteredStocks = watchlist.filter(
    (stock) =>
      stock?.name &&
      stock.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const labels = filteredStocks.map(
    (stock) => stock.name
  );

  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: filteredStocks.map(
          (stock) => stock.price
        ),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (

    <div className="watchlist-container">
      <button
        className="add-stock-btn"
        onClick={handleAddStock}
      >
        + Add Stock
      </button>
      <div className="watchlist-search-container">
        <input
          type="text"
          className="search"
          placeholder="Search stocks..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />
        <span className="counts">
          {filteredStocks.length}/{watchlist.length}
        </span>
      </div>

      <ul className="list">
        {filteredStocks.map((stock, index) => {
          return (
            <WatchListItem
              stock={stock}
              key={index}
            />
          );
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  }

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span
            className={
              stock.isDown
                ? "down"
                : "up"
            }
          >
            {stock.percent}
          </span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )
          }

          <span className="price">
            ₹ {Number(stock.price).toFixed(2)}
          </span>
        </div>
      </div>

      {showWatchlistActions &&
        <WatchListActions
          uid={stock.name}
          stockId={stock._id}
          currentPrice={stock.price}
        />
      }
    </li>
  );
};

const WatchListActions = ({
  uid,
  stockId,
  currentPrice,
}) => {

  const generalContext =
    useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = async () => {

    try {

      await axios.post(
        "http://localhost:3002/sellOrder",
        {
          userId:
            localStorage.getItem("userId"),
          name: uid,
          qty: 1,
          price: currentPrice,
        }
      );

      alert(`${uid} Sell Order Placed`);

    } catch (error) {

      console.log(error);

      alert("Sell Order Failed");

    }
  };

  const handleDeleteStock = async () => {

    try {

      await axios.delete(
        `http://localhost:3002/watchlist/${stockId}`
      );

      alert("Stock Removed");

      window.location.reload();

    } catch (err) {

      console.log(err);

    }
  };

  return (
    <span className="actions">

      <span>

        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="buy"
            onClick={handleBuyClick}
          >
            Buy
          </button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="sell"
            onClick={handleSellClick}
          >
            Sell
          </button>
        </Tooltip>

        <button
          className="remove-stock-btn"
          onClick={handleDeleteStock}
        >
          Remove
        </button>
      </span>

    </span>
  );
};