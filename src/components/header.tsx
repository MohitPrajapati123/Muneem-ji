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
            {/* <Link to="/about" className="text-gray-700 hover:text-amber-600 transition font-medium">
              About Us
            </Link> */}
             {/* Taxation DROPDOWN  */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("Taxation")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-amber-600 font-medium"
                onClick={() => toggleDropdown("Taxation")}
              >
                Taxation <ChevronDown size={18} />
              </button>

              {dropdown === "Taxation" && (
                <div className="absolute bg-white shadow-xl p-4 rounded-lg top-full left-0 w-56">
                  <Link to="/taxation/accounting" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                   GSTR-1 & GSTR-2A Data Preparation
                  </Link>
                  <Link to="/Taxation/gst" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    GSTR-1 & GSTR-2A Reconciliation
                  </Link>
                  <Link to="/Taxation/tax" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    GSTR-1, GST-2A , GSTR9 and 9C
                  </Link>
                </div>
              )}
            </div>

            {/* Registration DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("Registration")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-amber-600 font-medium"
                onClick={() => toggleDropdown("Registration")}
              >
                Registration <ChevronDown size={18} />
              </button>

              {dropdown === "Registration" && (
                <div className="absolute bg-white shadow-xl p-4 rounded-lg top-full left-0 w-56">
                  <Link to="/Registration/accounting" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    Accounting Services
                  </Link>
                  <Link to="/Registration/gst" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    GST Services
                  </Link>
                  <Link to="/Registration/tax" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    Tax Consultation
                  </Link>
                </div>
              )}
            </div>

            {/* Accounting DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("Accounting ")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-amber-600 font-medium"
                onClick={() => toggleDropdown("hr")}
              >
                Accounting  <ChevronDown size={18} />
              </button>

              {dropdown === "Accounting " && (
                <div className="absolute bg-white shadow-xl p-4 rounded-lg top-full left-0 w-56">
                  <Link to="/Accounting /epfo" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    EPFO
                  </Link>
                  <Link to="/Accounting /esic" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    ESIC
                  </Link>
                  <Link to="/Accounting /compliance" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    Compliance
                  </Link>
                </div>
              )}
            </div>

            {/* Financial Reporting DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("Financial Reporting")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-amber-600 font-medium"
                onClick={() => toggleDropdown("Financial Reporting")}
              >
                Financial Reporting <ChevronDown size={18} />
              </button>

              {dropdown === "Financial Reporting" && (
                <div className="absolute bg-white shadow-xl p-4 rounded-lg top-full left-0 w-56">
                  <Link to="/financial-reporting/esic-registration" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    ESIC Registration
                  </Link>
                  <Link to="/Financial Reporting/returns" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
                    ESIC Returns
                  </Link>
                </div>
              )}
            </div>

            {/* Labour & Legal Compliance DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("Labour & Legal Compliance")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-amber-600 font-medium"
                onClick={() => toggleDropdown("Labour & Legal Compliance")}
              >
                Labour & Legal Compliance <ChevronDown size={18} />
              </button>

              {dropdown === "Labour & Legal Compliance" && (
                <div className="absolute bg-white shadow-xl p-4 rounded-lg top-full left-0 w-56">
                  <Link to="/Labour & Legal Compliance/registration" className="block py-2 hover:text-red-600" onClick={handleNavClick}>
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

            {/* Mobile Registration */}
            <details className="bg-gray-100 p-3 rounded group">
              <summary className="cursor-pointer font-medium flex justify-between items-center">
                Registration & Accounts <ChevronDown size={18} />
              </summary>
              <div className="pl-4 mt-2 flex flex-col gap-2">
                <Link to="/Registration/accounting" onClick={handleNavClick}>Accounting Services</Link>
                <Link to="/Registration/gst" onClick={handleNavClick}>GST Services</Link>
                <Link to="/Registration/tax" onClick={handleNavClick}>Tax Consultation</Link>
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
