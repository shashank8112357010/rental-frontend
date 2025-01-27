import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Internship = () => {
    const [isLoading, setIsLoading] = useState(true);

    const internships = [
        {
            title: "Software Development Internship",
            deadline: "March 15, 2025",
            years: "2025-2026",
            applyLink: "https://example.com/apply-software-dev",
            applicationProcess: " dev@example.com",
        },
        {
            title: "Data Science Internship",
            deadline: "April 10, 2025",
            years: "2025-2027",
            applyLink: "https://example.com/apply-data-science",
            applicationProcess: " data@example.com",
        },
        {
            title: "UI/UX Design Internship",
            deadline: "May 1, 2025",
            years: "2025-2026",
            applyLink: "https://example.com/apply-ui-ux",
            applicationProcess: "design@example.com",
        },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-black text-white min-h-screen p-2 pb-8 md:p-8 mt-44 md:mt-0">
            <h1 className="text-3xl font-bold text-center mb-8">Internships</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading
                    ? // Skeleton Loading State
                    Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-2xl shadow-lg p-3 border border-gray-700 animate-pulse"
                        >
                            <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
                            <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
                            <div className="h-4 bg-gray-700 rounded w-2/3 mb-4"></div>
                            <div className="h-8 bg-gray-700 rounded w-1/3"></div>
                        </div>
                    ))
                    : // Actual Data
                    internships.map((internship, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-700 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="text-xl font-semibold mb-4">{internship.title}</h2>
                                <p className="text-gray-400 mb-4">
                                    <span className="font-medium text-white">Eligibility:</span> {internship.years}
                                </p>
                                <p className="text-gray-400 mb-4">
                                    <span className="font-medium text-white">Application Process:</span> {internship.applicationProcess}
                                </p>
                                <p className="text-gray-400 mb-2">
                                    <span className="font-medium text-white">Deadline:</span> {internship.deadline}
                                </p>
                            </div>
                            <Link
                                to={internship.applyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 w-32 text-center border-white px-4 py-2 text-white text-sm font-semibold rounded-lg shadow-md hover:border-white focus:outline-none active:scale-95 transition-all duration-300 ease-in-out"
                            >
                                Apply Now
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Internship;
