import { Mail, MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-12 h-12 bg-white rounded-lg p-1">
                <img
                src={logo}
                alt="Muneem Jee Logo"
                className="object-contain w-full h-full"
              />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-amber-400">Muneem Jee</span>
                <span className="text-xs text-red-500">Finance & Accounts</span>
              </div>
            </Link>
            <p className="opacity-70 text-sm">Your complete business compliance and startup guide.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-amber-400">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <Link to="/about" className="hover:text-amber-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/taxation" className="hover:text-amber-400 transition">
                  Taxation
                </Link>
              </li>
              <li>
                <Link to="/financial-reporting" className="hover:text-amber-400 transition">
                  Financial-Reporting
                </Link>
              </li>
              <li>
                <Link to="/labour-legal-compliance" className="hover:text-amber-400 transition">
                  Labour & Legal Compliance
                </Link>
              </li>
              <li>
                <Link to="/registration" className="hover:text-amber-400 transition">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/accounting" className="hover:text-amber-400 transition">
                 Accounting
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-amber-400">Resources</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <Link to="/startup" className="hover:text-amber-400 transition">
                  Startup Guide
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-amber-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-amber-400 transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-amber-400">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2 hover:text-amber-400 transition">
                <Mail size={16} />
                <span>finance@diamondore.in</span>
              </li>
              <li className="flex items-center gap-2 hover:text-amber-400 transition">
                <Phone size={16} />
                <span>+91 9654796526</span>
              </li>
              <li className="flex items-start gap-2 hover:text-amber-400 transition">
                <MapPin size={16} className="mt-1" />
                <span>B-127, Sector-63,Noida-201301 Second floor India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-600 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm opacity-70">
            <div>
              <p>&copy; 2025 Muneem Jee. Create by Mohit Prajapati.</p>
            </div>
            <div className="flex gap-6 justify-end">
              <Link to="/privacy-policy" className="hover:text-amber-400 transition">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="hover:text-amber-400 transition">
                Terms & Conditions
              </Link>
              <Link to="/disclaimer" className="hover:text-amber-400 transition">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
