import React from "react";
import { motion } from "framer-motion";
import Crack from '../../assets/rentalimg/Crack.png'

const BlogsPage3 = () => {
    return (
        <div className="h-fit pb-16 mt-44 md:mt-0">
            {/* Header Section */}
            <div className="flex items-center justify-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-2xl md:text-3xl font-bold text-black text-center"
                >
                    Crack the Code of Academic Success with Us!
                </motion.h1>
            </div>

            {/* Main Content Section */}
            <div className="px-6 flex flex-col md:flex-row mt-12">
                {/* Image Section */}
                <div className="md:w-1/2 flex">
                    <motion.img
                        src={Crack}
                        alt="Academic Success"
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
                        Struggling to keep up with notes, deadlines, and research? We’ve got your back!
                    </motion.h2>
                    <div className="space-y-6">
                        {[
                            "Our platform is built to make your academic journey smoother, smarter, and stress-free.",
                            "Here’s how we help:",
                            "📚 Ready-to-Use Notes: High-quality, curated academic notes to save your time and boost your understanding.",
                            "🔍 Research Made Simple: Get expert assistance for your research projects and ace every paper.",
                            "⏱️ Time-Saving Tools: Focus on what matters most while we handle the academic grunt work.",
                            "🖱️ One-Stop Solution: From notes to research and beyond, find everything you need in one place.",
                            "Why struggle when success is just a click away? Level up your academic game with our all-in-one solution!",
                        ].map((text, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: index * 0.3 }}
                                className="text-md text-gray-900 leading-relaxed"
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

export default BlogsPage3;
