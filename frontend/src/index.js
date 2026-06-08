import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './landing_page/home/HomePage.js';
import Signup from './landing_page/signup/Signup.js';
import About from './landing_page/about/AboutPage.js';
import ProductPage from './landing_page/products/ProductsPage.js';
import PricingPage from './landing_page/pricing/PricingPage.js';
import SupportPage from './landing_page/support/SupportPage.js';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js'
import NotFound from './components/NotFound.js';
import Login from './landing_page/login/Login.js';
import AppLayout from "./components/AppLayout";  

import "./styles/global.css";
import "./styles/hero.css";
import "./styles/buttons.css";
import "./styles/navbar.css";
import "./styles/cards.css";
import "./styles/pricing.css";
import "./styles/footer.css";
import "./styles/auth.css";
import "./styles/responsive.css";
import "./styles/products.css";
import "./styles/support.css";
import "./styles/about.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <AppLayout>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/about" element={<About />} />
    <Route path="/product" element={<ProductPage />} />
    <Route path="/pricing" element={<PricingPage />} />
    <Route path="/support" element={<SupportPage />} />
    <Route path="/*" element={<NotFound />} />
  </Routes> 
</AppLayout>
  </BrowserRouter>
)


