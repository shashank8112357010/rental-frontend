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
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import footerlogo from "../assets/logo.png"
import footerlogo from "../assets/newLogo.png"

export default function Footer() {
  return (
    <>
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Details */}
            <div className="py-4 ">
              {/* <h1 className="text-2xl font-bold mb-4">Rent Ease</h1> */}
              <Link to="/">
                <img src={footerlogo} alt="" className="w-32 md:ml-0 ml-16" />
              </Link>
              <p className="pt-8">&copy; 2025 Grad Commune | All rights reserved</p>
            </div>

            {/* Information Section */}
            <div className="py-4">
              <h1 className="text-xl font-bold mb-4">Information</h1>
              <ul className="flex flex-col gap-3">
                <li className="text-gray-400">
                  <Link to="/" className="image transition duration-200">
                    Home
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to="/about" className="image transition duration-200">
                    About Us
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to="/contact" className="image transition duration-200">
                    Contact Us
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to="/services" className="image transition duration-200">
                    Services
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to="/blogs" className="image transition duration-200">
                    Blogs
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to="/terms&conditions" className="image transition duration-200">
                    Terms and Conditions
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to="/privacy-policy" className="image transition duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to="/refund&concellations" className="image transition duration-200">
                    Refund & Concellations
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to="/shipping-policy" className="image transition duration-200">
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact and Social Media Section */}
            <div className="py-4">
              <h1 className="text-xl font-bold mb-4">Connect with us</h1>
              <div className="flex gap-4 mb-4">
                <Link target="_blank" to="https://www.facebook.com/share/1BahfgLwjz/?mibextid=wwXIfr">
                  <FaFacebook className="text-2xl text-gray-400 image transition duration-200" />
                </Link>
                <Link target="_blank" to="https://www.instagram.com/gradcommune?igsh=dTZndHBzYmE2ZGh1&utm_source=qr">
                  <FaInstagram className="text-2xl text-gray-400 image transition duration-200" />
                </Link>


                {/* <FaWhatsapp className="text-2xl text-gray-400 image transition duration-200" /> */}

                <FaLinkedin className="text-2xl text-gray-400  transition duration-200" />
                <FaTwitter className="text-2xl text-gray-400  transition duration-200" />
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <FaLocationArrow className="text-xl" />
                <Link
                  to="https://www.google.com/maps/place/801-Lotus,+Park+Springs,+Porwal+Road,+Dhanori,+Pune,+411047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-200"
                >
                  801-Lotus, Park Springs, Porwal road, Dhanori, Pune, 411047
                </Link>
              </div>

              <div className="flex items-center gap-3 mt-3 text-gray-400">
                <FaMobileAlt className="text-xl" />
                <Link
                  to="tel:+917387358831"
                  className=" transition duration-200"
                >
                  +91 7387358831
                </Link>
              </div>
              <div className="flex items-center gap-3 mt-3 text-gray-400">
                <FaEnvelope className="text-xl" />
                <Link
                  to="mailto:info@example.com"
                  className=" transition duration-200"
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
          className="text-blue-500 image transition duration-200"
        >
          TechXpert.in
        </Link>
      </div>
    </>
  );
}
