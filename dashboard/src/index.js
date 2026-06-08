import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import Home from './components/Home'

import "./styles/dashboard.css";
import "./styles/cards.css";
import "./styles/charts.css"

import {
  ThemeProvider
} from "./context/ThemeContext";
 

const params = new URLSearchParams(
  window.location.search
);

if (params.get("userId")) {

  localStorage.setItem(
    "userId",
    params.get("userId")
  );

  localStorage.setItem(
    "name",
    params.get("name")
  );

  localStorage.setItem(
    "email",
    params.get("email")
  );

  localStorage.setItem(
    "token",
    params.get("token")
  );

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);


