import { XIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Internship = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedInternship, setSelectedInternship] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const internships = [
        {
            title: "Software Development Internship",
            deadline: "March 15, 2025",
            years: "2025-2026",
            applyLink: "https://example.com/apply-software-dev",
            applicationProcess: "dev@example.com",
            description: "A great opportunity to work with software development technologies like React, Node.js, etc."
        },
        {
            title: "Data Science Internship",
            deadline: "April 10, 2025",
            years: "2025-2027",
            applyLink: "https://example.com/apply-data-science",
            applicationProcess: "data@example.com",
            description: "Involve in data analytics, machine learning, and artificial intelligence projects."
        },
        {
            title: "UI/UX Design Internship",
            deadline: "May 1, 2025",
            years: "2025-2026",
            applyLink: "https://example.com/apply-ui-ux",
            applicationProcess: "design@example.com",
            description: "Work on designing intuitive user interfaces and enhancing user experiences."
        },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isModalOpen]);

    const openModal = (internship) => {
        setSelectedInternship(internship);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedInternship(null);
    };

    return (
        <div className="bg-black text-white min-h-screen p-2 pb-8 md:p-8 mt-44 md:mt-0">
            <h1 className="text-3xl font-bold text-center mb-8">Internships</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading
                    ? Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="bg-gray-800 rounded-2xl shadow-lg p-3 border border-gray-700 animate-pulse">
                            <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
                            <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
                            <div className="h-4 bg-gray-700 rounded w-2/3 mb-4"></div>
                            <div className="h-8 bg-gray-700 rounded w-1/3"></div>
                        </div>
                    ))
                    : internships.map((internship, index) => (
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
                            <button
                                onClick={() => openModal(internship)}
                                className="border-2 w-32 text-center border-white px-4 py-2 text-white text-sm font-semibold rounded-lg shadow-md hover:border-white focus:outline-none active:scale-95 transition-all duration-300 ease-in-out"
                            >
                                Read More
                            </button>
                        </div>
                    ))}
            </div>


            {isModalOpen && selectedInternship && (
                <div className="fixed inset-0 flex justify-center  items-center bg-black/50 z-50">
                    <div className="bg-gray-800 text-white p-8 rounded-xl w-[90%] md:w-[700px] lg:w-[800px] overflow-y-auto  max-h-[67vh] mt-40 md:mt-0 relative">

                        {/* Close Button with Icon */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white hover:text-gray-400 focus:outline-none"
                        >
                            <XIcon className="h-6 w-6" />
                        </button>
                        <div className="mb-6">
                            <h2 className="md:text-3xl text-[18px]  font-bold mb-4">Explore Internship Opportunities</h2>
                            <button>

                            </button>

                            <p className="text-gray-400">{selectedInternship.description}</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero expedita esse doloremque maxime minus beatae voluptas eligendi id officiis architecto amet eius excepturi soluta nemo omnis est reiciendis facere facilis autem dignissimos iure, non reprehenderit nam. Tenetur obcaecati, iste aspernatur dolor facilis dignissimos</p>
                        </div>
                        <div className="flex justify-center gap-8">
                            <Link
                                to={selectedInternship.applyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 w-48 border-2 text-center border-white px-4 py-2 text-white md:text-sm text-[12px] font-sm md:font-semibold rounded-lg shadow-md hover:border-white focus:outline-none active:scale-95 transition-all duration-300 ease-in-out"
                            >
                                Apply Now
                            </Link>
                            {/* <button
                                onClick={closeModal}
                                className="mt-4 w-48 border-2 border-white px-4 py-2 text-white md:text-sm text-[12px] font-sm md:font-semibold rounded-lg shadow-md text-center hover:border-white focus:outline-none active:scale-95 transition-all duration-300 ease-in-out"
                            >
                                Close
                            </button> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Internship;
