import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import InvestStratPage from "../pages/InvestStratPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import StockMarketPage from "../pages/StockMarketPage.jsx";
import CapitalPage from "../pages/CapitalPage.jsx";
import InterairPorts from "../pages/InterairPorts.jsx";
import MarketInsight from "../pages/MarketInsight.jsx";
import PotentialPage from "../pages/PotentialPage.jsx";
import ContactUsPage from "../pages/ContactUsPage.jsx";
import CarrerPage from "../pages/CarrerPage.jsx";

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/investmentstrategies" element={<InvestStratPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/stockmarket" element={<StockMarketPage />} />
      <Route path="/capitalallocations" element={<CapitalPage />} />
      <Route path="/internationaloptions" element={<InterairPorts />} />
      <Route path="/marketinsight" element={<MarketInsight />} />
      <Route path="/potential" element={<PotentialPage />} />
      <Route path="/contactus" element={<ContactUsPage />} />
      <Route path="/careers" element={<CarrerPage />} />
    </Routes>
  );
}
