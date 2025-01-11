import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Message() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleChat = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div>
            {/* WhatsApp Icon */}
            <div className="fixed bottom-6 right-6 z-50">
                <button

                    className="bg-green-500 p-4 rounded-full shadow-lg border-4 border-white hover:shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out"
                    onClick={toggleChat}
                    aria-label="WhatsApp Chat"
                >
                    <FaWhatsapp className="text-white text-2xl" />
                </button>
            </div>

            {/* WhatsApp Chat Popup */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 bg-white border border-gray-200 rounded-lg shadow-2xl z-50 w-80 transition-transform ease-in-out duration-300">
                    <div className="bg-green-500 text-white rounded-t-lg px-3 py-3 flex items-center justify-between">
                        <span className="font-semibold text-lg">WhatsApp Chat</span>
                        <button
                            onClick={toggleChat}
                            className="text-white hover:text-gray-200 transition duration-300 text-lg"
                            aria-label="Close Chat"
                        >
                            ✖
                        </button>
                    </div>
                    <div className="p-4 space-y-4">
                        <p className="text-gray-800 font-medium text-sm">
                            Hi there! 👋 How can we assist you today?
                        </p>
                        <Link
                            to="https://wa.me/1234567890?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full w-full text-center block transition duration-300"
                        >
                            Start Chat
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
