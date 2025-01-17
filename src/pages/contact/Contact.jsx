import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="h-fit mt-44 md:mt-0 bg-black p-6 flex flex-col items-center">
            {/* Page Heading */}
            <motion.h1
                className="text-4xl font-bold text-gray-100 mb-12 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Contact Us
            </motion.h1>

            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl space-y-8 lg:space-y-0 lg:space-x-8">
                {/* Map Section */}
                <motion.div
                    className="w-full lg:w-1/2 h-72 lg:h-[400px] rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4458530020063!2d73.88026201471334!3d18.582962287375837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c132e58fb82f%3A0x2d632a0e5d9c4e3f!2sDhanori%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1673958993997!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </motion.div>

                {/* Contact Info Section */}
                <motion.div
                    className="w-full lg:w-1/2 text-white p-8 rounded-lg shadow-lg"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-bold text-gray-100 mb-4">Get in Touch</h2>
                    <p className="text-gray-100 mb-4">We'd love to hear from you! Reach out to us using the details below.</p>
                    <div className="space-y-4">
                        <p className="text-gray-100">
                            <span className="font-semibold">Address:</span> 801-Lotus, Park Springs, Porwal Road, Dhanori, Pune, 411047
                        </p>
                        <p className="text-gray-100">
                            <span className="font-semibold">Phone:</span> +91 7387358831
                        </p>
                        <p className="text-gray-100">
                            <span className="font-semibold">Email:</span> info@example.com
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
