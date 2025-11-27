"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setDropdown(dropdown === name ? null : name);
  };

  const handleNavClick = () => {
    setIsOpen(false);
    setDropdown(null);
  };

  return (
    <header className="bg-white  text-black border-b-4 border-red-600 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP BAR */}
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group" onClick={handleNavClick}>
            <div className="w-16 h-16">
              <img src={logo} alt="Muneem Jee Logo" className="object-contain w-full h-full" />
            </div>

            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-2xl text-red-600">Muneem Jee</span>
              <span className="text-xs text-amber-600 font-semibold">Finance & Accounts</span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 items-center">

            {/* About - no dropdown */}
            <Link to="/about" className="text-gray-700 hover:text-amber-600 transition font-medium">
              About Us
            </Link>

            {/* FINANCE DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("finance")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-amber-600 font-medium"
                onClick={() => toggleDropdown("finance")}
              >
                Finance & Accounts <ChevronDown size={18} />
              </button>

              {dropdown === "finance" && (
                <div className="absolute bg-white shadow-xl p-4 rounded-lg top-full left-0 w-56">
                  <Link to="/finance/accounting" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    Accounting Services
                  </Link>
                  <Link to="/finance/gst" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    GST Services
                  </Link>
                  <Link to="/finance/tax" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    Tax Consultation
                  </Link>
                </div>
              )}
            </div>

            {/* HR DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("hr")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-amber-600 font-medium"
                onClick={() => toggleDropdown("hr")}
              >
                HR Services <ChevronDown size={18} />
              </button>

              {dropdown === "hr" && (
                <div className="absolute bg-white shadow-xl p-4 rounded-lg top-full left-0 w-56">
                  <Link to="/hr-services/epfo" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    EPFO
                  </Link>
                  <Link to="/hr-services/esic" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    ESIC
                  </Link>
                  <Link to="/hr-services/compliance" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    Compliance
                  </Link>
                </div>
              )}
            </div>

            {/* ESIC DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("esic")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-amber-600 font-medium"
                onClick={() => toggleDropdown("esic")}
              >
                ESIC <ChevronDown size={18} />
              </button>

              {dropdown === "esic" && (
                <div className="absolute bg-white shadow-xl p-4 rounded-lg top-full left-0 w-56">
                  <Link to="/esic/registration" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    ESIC Registration
                  </Link>
                  <Link to="/esic/returns" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    ESIC Returns
                  </Link>
                </div>
              )}
            </div>

            {/* EPFO DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("epfo")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-amber-600 font-medium"
                onClick={() => toggleDropdown("epfo")}
              >
                EPFO <ChevronDown size={18} />
              </button>

              {dropdown === "epfo" && (
                <div className="absolute bg-white shadow-xl p-4 rounded-lg top-full left-0 w-56">
                  <Link to="/epfo/registration" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    EPFO Registration
                  </Link>
                  <Link to="/epfo/returns" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    EPFO Returns
                  </Link>
                </div>
              )}
            </div>

            {/* Contact */}
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

            {/* Mobile Finance */}
            <details className="bg-gray-100 p-3 rounded group">
              <summary className="cursor-pointer font-medium flex justify-between items-center">
                Finance & Accounts <ChevronDown size={18} />
              </summary>
              <div className="pl-4 mt-2 flex flex-col gap-2">
                <Link to="/finance/accounting" onClick={handleNavClick}>Accounting Services</Link>
                <Link to="/finance/gst" onClick={handleNavClick}>GST Services</Link>
                <Link to="/finance/tax" onClick={handleNavClick}>Tax Consultation</Link>
              </div>
            </details>

            {/* Mobile HR */}
            <details className="bg-gray-100 p-3 rounded group">
              <summary className="cursor-pointer font-medium flex justify-between items-center">
                HR Services <ChevronDown size={18} />
              </summary>
              <div className="pl-4 mt-2 flex flex-col gap-2">
                <Link to="/hr-services/payroll" onClick={handleNavClick}>Payroll</Link>
                <Link to="/hr-services/recruitment" onClick={handleNavClick}>Recruitment</Link>
                <Link to="/hr-services/compliance" onClick={handleNavClick}>Compliance</Link>
              </div>
            </details>

            {/* Mobile ESIC */}
            <details className="bg-gray-100 p-3 rounded group">
              <summary className="cursor-pointer font-medium flex justify-between items-center">
                ESIC <ChevronDown size={18} />
              </summary>
              <div className="pl-4 mt-2 flex flex-col gap-2">
                <Link to="/esic/registration" onClick={handleNavClick}>ESIC Registration</Link>
                <Link to="/esic/returns" onClick={handleNavClick}>ESIC Returns</Link>
              </div>
            </details>

            {/* Mobile EPFO */}
            <details className="bg-gray-100 p-3 rounded group">
              <summary className="cursor-pointer font-medium flex justify-between items-center">
                EPFO <ChevronDown size={18} />
              </summary>
              <div className="pl-4 mt-2 flex flex-col gap-2">
                <Link to="/epfo/registration" onClick={handleNavClick}>EPFO Registration</Link>
                <Link to="/epfo/returns" onClick={handleNavClick}>EPFO Returns</Link>
              </div>
            </details>

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
