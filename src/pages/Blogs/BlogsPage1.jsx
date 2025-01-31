import React from "react";
import { motion } from "framer-motion";
import Finding from '../../assets/rentalimg/Finding.png'

const BlogsPage1 = () => {
    return (
        <div className="h-fit pb-8 mt-44 md:mt-12">
            {/* Header Section */}
            <div className="flex items-center justify-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-2xl md:text-3xl font-bold text-white text-center"
                >
                    Finding Your Perfect Stay, Made Effortless!
                </motion.h1>
            </div>

            {/* Main Content Section */}
            <div className=" mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Image Section */}
                <div className="flex justify-center ">
                    <motion.img
                        src={Finding}
                        alt="Finding Your Perfect Stay"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="rounded-lg shadow-lg w-full md:w-5/6 lg:w-4/5 h-auto object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col justify-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-xl md:text-2xl font-bold text-white mb-6"
                    >
                        Say goodbye to the chaos of house-hunting!
                    </motion.h2>
                    <div className="space-y-6">
                        {[
                            "Discover how our platform makes finding your perfect stay quick and easy.",
                            "1. Save Time, Skip the Hunt: No more endless city tours! With our platform, explore a curated list of verified PGs and flats right from your device.",
                            "2. Handpicked Options for Every Budget: From affordable student PGs to premium flats, we connect you to choices tailored to your preferences and budget.",
                            "3. Trusted Brokers at Your Service: We work with reliable brokers who prioritize your needs, ensuring transparency and peace of mind.",
                            "4. Live Close to What Matters: Looking for something near your college or workplace? Filter options by location to find the perfect match in no time.",
                            "5. Stress-Free Move-In Process: No more last-minute hassles! Our smooth process helps you settle into your new place quickly and worry-free.",
                            "Ready to make your stay search easy, fun, and stress-free? Let’s find your dream accommodation today!",
                        ].map((text, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: index * 0.3 }}
                                className="text-[16px] text-white leading-relaxed"
                            >
                                {text}
                            </motion.p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsPage1;
