import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserAllEbookByIdService } from "../../services/api.service";

const Subjects = () => {
    const { subjectId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [modules, setModules] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Navigate to the module details page
    const handleModuleClick = (moduleId) => {
        navigate(`/modules/${moduleId}`);
    };

    useEffect(() => {
        if (subjectId) {
            UserAllEbookByIdService(subjectId)
                .then((response) => {
                    console.log(response);
                    setModules(response.data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching modules:", error);
                    setError("Failed to load modules");
                    setIsLoading(false);
                });
        } else {
            setError("Invalid subject ID");
            setIsLoading(false);
        }
    }, [subjectId]);

    return (
        <div className="bg-black mt-44 md:mt-0 p-2 md:p-8">
            <h1 className="text-3xl font-bold text-white mb-8 text-center">
                Modules
            </h1>

            {/* Handle error state */}
            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {isLoading
                    ? Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="relative border rounded-2xl overflow-hidden shadow-md animate-pulse bg-gray-700"
                        >
                            <div className="w-full h-24 bg-gray-600"></div>
                            <div className="p-4">
                                <div className="h-6 bg-gray-500 rounded w-3/4"></div>
                            </div>
                        </div>
                    ))
                    : modules.map((module) => (
                        <div
                            key={module._id}
                            onClick={() => handleModuleClick(module._id)}
                            className="relative bg-gradient-to-br from-gray-700 to-gray-500 text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                            style={{
                                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            <h2 className="text-lg font-semibold text-center">{module.title}</h2>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Subjects;
