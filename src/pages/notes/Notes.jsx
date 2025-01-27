import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Notes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const subjects = ["Math", "Science", "History", "English", "Physics", "Chemistry"];
    const navigate = useNavigate();

    const handleSubjectClick = (subject) => {
        navigate(`/subjects/${subject}`);
    };

    useEffect(() => {
        // Simulate data loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-black p-2 pb-8 md:p-8 mt-44 md:mt-0">
            <h1 className="text-3xl font-bold text-white mb-8 text-center">Notes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {isLoading
                    ? Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="relative border rounded-2xl overflow-hidden shadow-md animate-pulse bg-gray-700"
                        >
                            {/* Skeleton Image */}
                            <div className="w-full h-24 bg-gray-600"></div>
                            {/* Skeleton Text */}
                            <div className="p-4">
                                <div className="h-6 bg-gray-500 rounded w-3/4"></div>
                            </div>
                        </div>
                    ))
                    : subjects.map((subject, index) => (
                        <div
                            key={index}
                            onClick={() => handleSubjectClick(subject)}
                            className="relative bg-gradient-to-br from-gray-800 to-gray-600 text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                            style={{
                                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            <h2 className="text-xl font-semibold text-center">{subject}</h2>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Notes;
