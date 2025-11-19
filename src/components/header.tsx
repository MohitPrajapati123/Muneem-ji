"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white border-b-4 border-red-600 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP BAR */}
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group" onClick={handleNavClick}>
            <div className="w-16 h-16">
              <img
                src={logo}
                alt="Muneem Ji Logo"
                className="object-contain w-full h-full"
              />
            </div>

            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-2xl text-red-600">Muneem Ji</span>
              <span className="text-xs text-amber-600 font-semibold">
                Finance & Accounts
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link to="/about" className="text-gray-700 hover:text-amber-600 transition font-medium">
              About Us
            </Link>
            <Link to="/finance" className="text-gray-700 hover:text-amber-600 transition font-medium">
              Finance & Accounts
            </Link>
            <Link to="/hr-services" className="text-gray-700 hover:text-amber-600 transition font-medium">
              HR Services
            </Link>
            <Link to="/esic" className="text-gray-700 hover:text-amber-600 transition font-medium">
              ESIC
            </Link>
            <Link to="/epfo" className="text-gray-700 hover:text-amber-600 transition font-medium">
              EPFO
            </Link>
            <Link
              to="/contact"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition font-medium"
            >
              Contact Us
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden text-red-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link to="/about" className="text-gray-700 hover:text-amber-600 font-medium" onClick={handleNavClick}>
              About Us
            </Link>
            <Link to="/finance" className="text-gray-700 hover:text-amber-600 font-medium" onClick={handleNavClick}>
              Finance
            </Link>
            <Link to="/hr-services" className="text-gray-700 hover:text-amber-600 font-medium" onClick={handleNavClick}>
              HR Services
            </Link>
            <Link to="/esic" className="text-gray-700 hover:text-amber-600 font-medium" onClick={handleNavClick}>
              ESIC
            </Link>
            <Link to="/epfo" className="text-gray-700 hover:text-amber-600 font-medium" onClick={handleNavClick}>
              EPFO
            </Link>
            <Link
              to="/contact"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition w-full text-center font-medium"
              onClick={handleNavClick}
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
