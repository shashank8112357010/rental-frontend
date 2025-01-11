import React from "react";
import { motion } from "framer-motion";
import RideEasy from '../../assets/rentalimg/RideEasy.png'

const BlogsPage2 = () => {
    return (
        <div className="h-fit pb-16">
            {/* Header Section */}
            <div className="flex items-center justify-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-2xl md:text-3xl font-bold text-black text-center"
                >
                    Ride Easy, Roam Freely: Your Perfect Two-Wheel Partner Awaits!
                </motion.h1>
            </div>

            {/* Main Content Section */}
            <div className="px-6 flex flex-col md:flex-row mt-12">
                {/* Image Section */}
                <div className="md:w-1/2 flex">
                    <motion.img
                        src={RideEasy}
                        alt="Ride Easy, Roam Freely"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="rounded-lg shadow-lg w-full md:w-5/6 lg:w-4/5 h-auto object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-xl md:text-2xl font-bold text-gray-900 mb-6"
                    >
                        Tired of walking long distances or waiting endlessly for public transport?
                    </motion.h2>
                    <div className="space-y-6">
                        {[
                            "We get it—student life demands speed, convenience, and freedom! That’s why our platform connects you with trusted providers offering scooty and bike rentals that fit your budget and lifestyle.",
                            "Here’s why you’ll love it:",
                            "🚴 Freedom to Roam: Explore your city without limits. Go where you want, when you want!",
                            "💸 Affordable Rides: Find pocket-friendly rental options perfect for students.",
                            "🔧 Well-Maintained Bikes: Ride worry-free with reliable and serviced two-wheelers.",
                            "🖱️ Seamless Process: Browse, book, and ride—all in just a few clicks!",
                            "Whether it’s a quick ride to college or a weekend getaway, we’ve got the wheels to match your vibe. Say goodbye to commute hassles and hello to ultimate convenience! Start your journey with us today.",
                        ].map((text, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: index * 0.3 }}
                                className="text-md text-gray-600 leading-relaxed"
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

export default BlogsPage2;
