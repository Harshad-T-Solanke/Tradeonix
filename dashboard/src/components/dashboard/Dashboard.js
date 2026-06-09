
import { Route, Routes } from "react-router-dom";

import Analytics from "./Analytics";
import Portfolio from "./Portfolio";
import MarketOverview from "./MarketOverview";
import News from "./News";

import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import TopBar from "../layout/TopBar";
import Menu from "../layout/Menu";
import Profile from "./Profile";
import Notifications from "./Notifications";
import TradeHistory from "./TradeHistory";
import Settings from "./Settings";
import PortfolioPerformance from "./PortfolioPerformance";

import React,
{
  useContext,
} from "react";

import ThemeContext
from "../../context/ThemeContext";

import { GeneralContextProvider } from "../../context/GeneralContext";

const Dashboard = () => {
  const { theme } =
  useContext(ThemeContext);
  return (
    <GeneralContextProvider>

      <div className={`dashboard-wrapper ${theme}`}>

       

        <div className="dashboard-menu">
          <Menu />
        </div>

       

        <div className="dashboard-main">

          <TopBar />

          <div className="dashboard-content">

            <Routes>
              <Route
                path="/"
                element={<Summary />}
              />
              <Route
                path="/orders"
                element={<Orders />}
              />
              <Route
                path="/holdings"
                element={<Holdings />}
              />
              <Route
                path="/positions"
                element={<Positions />}
              />
              <Route
                path="/funds"
                element={<Funds />}
              />
              <Route
                path="/analytics"
                element={<Analytics />}
              />
              <Route
                path="/portfolio"
                element={<Portfolio />}
              />
              <Route
                path="/market"
                element={<MarketOverview />}
              />
              <Route
                path="/news"
                element={<News />}
              />
              <Route
                path="/profile"
                element={<Profile />}
              />
              <Route
                path="/notifications"
                element={<Notifications />}
              />
              <Route
                path="/trade-history"
                element={<TradeHistory />}
              />
              <Route
                path="/portfolio-performance"
                element={<PortfolioPerformance />}
              />
              <Route
                path="/settings"
                element={<Settings />}
              />

            </Routes>

          </div>

        </div>

        <div className="dashboard-watchlist">
          <WatchList />
        </div>

      </div>

    </GeneralContextProvider>
  );
};

export default Dashboard;