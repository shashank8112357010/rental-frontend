import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getToken } from "../../helper/tokenHelper";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
import { UserAllEbookByIdService } from "../../services/api.service";

const ModuleDetail = () => {
    const { moduleId } = useParams();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [moduleDetails, setModuleDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    // Handle "Read More" click
    const handleReadMoreClick = useCallback(() => {
        if (!getToken()) {
            toast.info("You need to log in first!");
            setIsAuthModalOpen(true);
            return;
        }
    }, []);

    // Close modals
    const closeAuthModal = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    useEffect(() => {
        if (isAuthModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isAuthModalOpen]);


    // Fetch module details using API service
    useEffect(() => {
        if (moduleId) {
            UserAllEbookByIdService(moduleId)
                .then((response) => {
                    console.log(response)
                    // setModuleDetails(response.data); 
                    // setIsLoading(false); 
                })
                .catch((error) => {
                    console.error("Error fetching module details:", error);
                    setError("Failed to load module details");
                    // setIsLoading(false);
                });
        }
    }, [moduleId]);



    return (
        <div className="bg-black mt-44 md:mt-0 p-2 pb-8 md:p-8">
            <h1 className="text-3xl font-bold text-white mb-8 text-center">
                Module  Content
                {/* {moduleId} */}
            </h1>

            <div className="pt-10">
                <h2 className="text-2xl font-bold text-white mb-4">Module Content</h2>
                <p className="text-white mb-6">
                    Here you can display module-specific content, such as topics, resources, or notes.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec euismod erat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum cum iste qui dolorum ab veritatis? Sequi praesentium atque architecto explicabo odio deserunt soluta laudantium eaque exercitationem doloribus beatae placeat tenetur cupiditate quas nisi, iure veritatis culpa dolores quidem quo commodi. Ipsam adipisci, non placeat atque beatae cum doloremque molestiae sed numquam animi, quo labore a quae pariatur quasi odio odit cupiditate sequi, omnis quod unde delectus! Laudantium quo facere delectus sapiente sunt id adipisci quas, aperiam saepe, perspiciatis fugit recusandae non possimus corrupti cum ratione? Alias iure unde modi fugiat accusamus magni dolorem quia dolor ex? Veritatis earum nulla aliquid.
                </p>
                <button
                    onClick={handleReadMoreClick}
                    className="w-60 bg-white text-black px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 hover:bg-gray-200 transition"
                >
                    Read More Buy Now
                </button>
            </div>

            {/* Login/Register Modal */}
            {isAuthModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto"
                    onClick={closeAuthModal}
                >
                    <div
                        className="bg-white rounded-xl shadow-md w-[80%] h-[50%] md:h-auto  mt-40 max-w-sm mx-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {isLogin ? (
                            <Login
                                closeDialog={closeAuthModal}
                                switchToRegister={() => setIsLogin(false)}
                            />
                        ) : (
                            <Register switchToLogin={() => setIsLogin(true)} />
                        )}
                    </div>
                </div>
            )}

        </div>
    );
};

export default ModuleDetail;
