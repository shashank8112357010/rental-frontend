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

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Details */}
          <div className="py-4">
            <h1 className="text-2xl font-bold mb-4">Company Name</h1>
            <p>&copy; 2025 Company Name | All rights reserved</p>
          </div>

          {/* Information Section */}
          <div className="py-4">
            <h1 className="text-xl font-bold mb-4">Information</h1>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-400">Home</li>
              <li className="text-gray-400">About Us</li>
              <li className="text-gray-400">Services</li>
              <li className="text-gray-400">Blog</li>
            </ul>
          </div>

          {/* Contact and Social Media Section */}
          <div className="py-4">
            <h1 className="text-xl font-bold mb-4">Connect with us</h1>
            <div className="flex gap-4 mb-4">
              <FaFacebook className="text-2xl text-gray-400" />
              <FaInstagram className="text-2xl text-gray-400" />
              <FaPinterest className="text-2xl text-gray-400" />
              <FaLinkedin className="text-2xl text-gray-400" />
              <FaTwitter className="text-2xl text-gray-400" />
            </div>

            <div className="flex items-center gap-3 text-gray-400">
              <FaLocationArrow className="text-xl" />
              <p>801-Lotus, Park Springs, Porwal road, Dhanori, Pune, 411047</p>
            </div>
            <div className="flex items-center gap-3 mt-3 text-gray-400">
              <FaMobileAlt className="text-xl" />
              <p>+91 7387358831</p>
            </div>
            <div className="flex items-center gap-3 mt-3 text-gray-400">
              <FaEnvelope className="text-xl" />
              <p>info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
