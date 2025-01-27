import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Subjects = () => {
    const { subjectName } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const modules = [
        { id: "1", name: "Module 1" },
        { id: "2", name: "Module 2" },
        { id: "3", name: "Module 3" },
        { id: "4", name: "Module 4" },
        { id: "5", name: "Module 5" },
        { id: "6", name: "Module 6" },
        { id: "7", name: "Module 7" },
        { id: "8", name: "Module 8" },
        { id: "9", name: "Module 9" },
        { id: "10", name: "Module 10" },
        { id: "11", name: "Module 11" },
        { id: "12", name: "Module 12" },
        { id: "13", name: "Module 13" },
        { id: "14", name: "Module 14" },
        { id: "15", name: "Module 15" },
        { id: "16", name: "Module 16" },
    ];

    const handleModuleClick = (id) => {
        navigate(`/modules/${subjectName}/${id}`);
    };

    useEffect(() => {
        // Simulate data loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-black  mt-44 md:mt-0 p-2 md:p-8">
            <h1 className="text-3xl font-bold text-white mb-8 text-center">
                {subjectName} Modules
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {isLoading
                    ? Array.from({ length: 4 }).map((_, index) => (
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
                    : modules.map((module) => (
                        <div
                            key={module.id}
                            onClick={() => handleModuleClick(module.id)}
                            className="relative bg-gradient-to-br from-gray-700 to-gray-500 text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                            style={{
                                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            <h2 className="text-lg font-semibold text-center">{module.name}</h2>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Subjects;
