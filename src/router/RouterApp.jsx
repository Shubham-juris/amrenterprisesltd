import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import InvestStratPage from "../pages/InvestStratPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import StockMarketPage from "../pages/StockMarketPage.jsx";
import CapitalPage from "../pages/CapitalPage.jsx";
export default function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/investmentstrategies" element={<InvestStratPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/stockmarket" element={<StockMarketPage />} />
      <Route path="/capitalallocations" element={<CapitalPage />} />
    </Routes>
  );
}
