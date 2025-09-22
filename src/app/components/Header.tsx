"use client";

import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full glass z-50">
      <nav className="container mx-auto flex justify-between items-baseline p-4">
        <h1 className="bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 text-transparent bg-clip-text text-xl font-bold leading-6">
          A.K
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-sm">
          <li>
            <a
              href="#about"
              className="relative text-gray-300 hover:text-white transition-all duration-300 group"
              aria-label="Navigate to About section"
            >
              <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-pink-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                About
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="relative text-gray-300 hover:text-white transition-all duration-300 group"
              aria-label="Navigate to Education section"
            >
              <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-pink-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                Education
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="relative text-gray-300 hover:text-white transition-all duration-300 group"
              aria-label="Navigate to Experience section"
            >
              <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-pink-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                Experience
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="relative text-gray-300 hover:text-white transition-all duration-300 group"
              aria-label="Navigate to Skills section"
            >
              <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-pink-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                Skills
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative text-gray-300 hover:text-white transition-all duration-300 group"
              aria-label="Navigate to Contact section"
            >
              <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-pink-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                Contact
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors duration-300 leading-6"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-gray-600">
          <div className="px-4 py-3 space-y-1">
            <a
              href="#about"
              className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-all duration-300 text-base"
              onClick={closeMobileMenu}
            >
              About
            </a>
            <a
              href="#education"
              className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-all duration-300 text-base"
              onClick={closeMobileMenu}
            >
              Education
            </a>
            <a
              href="#experience"
              className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-all duration-300 text-base"
              onClick={closeMobileMenu}
            >
              Experience
            </a>
            <a
              href="#skills"
              className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-all duration-300 text-base"
              onClick={closeMobileMenu}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-all duration-300 text-base"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
