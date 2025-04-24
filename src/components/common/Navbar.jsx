import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="home"
              style={{ width: "6rem", height: "6rem", marginLeft: "1rem" }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 lg:flex">
          <Link to="/" className="text-sm font-medium hover:text-blue-400">
            Home
          </Link>
          <Link
            to="/investment-strategies"
            className="text-sm font-medium hover:text-blue-400"
          >
            Investment Strategies
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-blue-400">
            About
          </Link>

          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 text-sm font-medium hover:text-blue-400"
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
            >
              <span>Solutions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${
                  isSolutionsOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isSolutionsOpen && (
              <div
                className="absolute left-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              >
                <Link
                  to="/capitalal-locations"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Capital Allocations
                </Link>
                <Link
                  to="/international-options"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  International options
                </Link>
                <Link
                  to="/market-insight"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Market Insight
                </Link>
                <Link
                  to="/potential"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Potential partnership
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/stock-market"
            className="text-sm font-medium hover:text-blue-400"
          >
            Stock Market
          </Link>
          <Link
            to="/contact-us"
            className="text-sm font-medium hover:text-blue-400"
          >
            Contact Us
          </Link>
          <Link
            to="/careers"
            className="text-sm font-medium hover:text-blue-400"
          >
            Careers
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-white hover:text-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {!isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 bg-black px-4 pb-3 pt-2">
            <Link
              to="/"
              className="block py-2 text-sm font-medium text-white hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              to="/investment-strategies"
              className="block py-2 text-sm font-medium text-white hover:text-blue-400"
            >
              Investment Strategies
            </Link>
            <Link
              to="/about"
              className="block py-2 text-sm font-medium text-white hover:text-blue-400"
            >
              About
            </Link>

            {/* Solutions in mobile */}
            <button
              className="flex w-full items-center justify-start py-2 text-sm font-medium text-white hover:text-blue-400"
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
            >
              <span>Solutions </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${
                  isSolutionsOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isSolutionsOpen && (
              <div className="ml-4 space-y-1 border-l border-gray-700 pl-4">
                <Link
                  to="/capital-allocations"
                  className="block py-2 text-sm font-medium text-white hover:text-blue-400"
                >
                  Capital Allocations
                </Link>
                <Link
                  to="/international-options"
                  className="block py-2 text-sm font-medium text-white hover:text-blue-400"
                >
                  International options
                </Link>
                <Link
                  to="/market-insight"
                  className="block py-2 text-sm font-medium text-white hover:text-blue-400"
                >
                  Market Insight
                </Link>
                <Link
                  to="/potential-partnership"
                  className="block py-2 text-sm font-medium text-white hover:text-blue-400"
                >
                  Potential partnership
                </Link>
              </div>
            )}

            <Link
              to="/stock-market"
              className="block py-2 text-sm font-medium text-white hover:text-blue-400"
            >
              Stock Market
            </Link>
            <Link
              to="/contact-us"
              className="block py-2 text-sm font-medium text-white hover:text-blue-400"
            >
              Contact Us
            </Link>
            <Link
              to="/careers"
              className="block py-2 text-sm font-medium text-white hover:text-blue-400"
            >
              Careers
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
