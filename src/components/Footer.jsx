import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
  FaPinterest,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Details */}
            <div className="py-4">
              <h1 className="text-2xl font-bold mb-4">Rent Ease</h1>
              <p>&copy; 2025 Company Name | All rights reserved</p>
            </div>

            {/* Information Section */}
            <div className="py-4">
              <h1 className="text-xl font-bold mb-4">Information</h1>
              <ul className="flex flex-col gap-3">
                <li className="text-gray-400">
                  <Link to="/" className="hover:text-indigo-600 transition duration-200">
                    Home
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to="/about" className="hover:text-indigo-600 transition duration-200">
                    About Us
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to="/services" className="hover:text-indigo-600 transition duration-200">
                    Services
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to="/term_conditions" className="hover:text-indigo-600 transition duration-200">
                    Terms and Conditions
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to="/privacy_policy" className="hover:text-indigo-600 transition duration-200">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact and Social Media Section */}
            <div className="py-4">
              <h1 className="text-xl font-bold mb-4">Connect with us</h1>
              <div className="flex gap-4 mb-4">
                <FaFacebook className="text-2xl text-gray-400 hover:text-indigo-600 transition duration-200" />
                <FaInstagram className="text-2xl text-gray-400 hover:text-indigo-600 transition duration-200" />
                <FaPinterest className="text-2xl text-gray-400 hover:text-indigo-600 transition duration-200" />
                <FaLinkedin className="text-2xl text-gray-400 hover:text-indigo-600 transition duration-200" />
                <FaTwitter className="text-2xl text-gray-400 hover:text-indigo-600 transition duration-200" />
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <FaLocationArrow className="text-xl" />
                <Link
                  to="https://www.google.com/maps/place/801-Lotus,+Park+Springs,+Porwal+Road,+Dhanori,+Pune,+411047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-500 transition duration-200"
                >
                  801-Lotus, Park Springs, Porwal road, Dhanori, Pune, 411047
                </Link>
              </div>

              <div className="flex items-center gap-3 mt-3 text-gray-400">
                <FaMobileAlt className="text-xl" />
                <Link
                  to="tel:+917387358831"
                  className="hover:text-indigo-600 transition duration-200"
                >
                  +91 7387358831
                </Link>
              </div>
              <div className="flex items-center gap-3 mt-3 text-gray-400">
                <FaEnvelope className="text-xl" />
                <Link
                  to="mailto:info@example.com"
                  className="hover:text-indigo-600 transition duration-200"
                >
                  info@example.com
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-2 text-center">
        Powered by{" "}
        <Link
          to="https://techxpert.in"
          target="_blank"
          className="text-blue-500 hover:text-indigo-600 transition duration-200"
        >
          TechXpert.in
        </Link>
      </div>
    </>
  );
}
