import React, { useState, useEffect } from "react";

export default function Message() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleChat = () => {
        setIsOpen((prev) => !prev);
    };

    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = "https://embed.tawk.to/YOUR_TAWK_WIDGET_ID/DEFAULT";
    //     script.async = true;
    //     script.charset = "UTF-8";
    //     script.setAttribute('crossorigin', '*');
    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);

    return (
        <div>
            {/* Tawk.to Chat Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    className="bg-indigo-500 p-4 rounded-full shadow-lg border-4 border-white hover:shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out"
                    onClick={toggleChat}
                    aria-label="Tawk Chat"
                >
                    {/* Chat icon */}
                    <span className="text-white text-2xl">💬</span> {/* Replace with Tawk.to's icon */}
                </button>
            </div>

            {/* Tawk.to Chat Popup */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 bg-white border border-gray-200 rounded-lg shadow-2xl z-50 w-80 transition-transform ease-in-out duration-300">
                    <div className="bg-indigo-500 text-white rounded-t-lg px-3 py-3 flex items-center justify-between">
                        <span className="font-semibold text-lg">Live Chat</span>
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
                        <button
                            onClick={toggleChat}
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded-full w-full text-center block transition duration-300"
                        >
                            Start Chat
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
