import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getToken } from "../../helper/tokenHelper";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";

const ModuleDetail = () => {
    const { subjectName, id } = useParams();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

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


    return (
        <div className="bg-black mt-44 md:mt-0 p-8">
            <h1 className="text-3xl font-bold text-white mb-8 text-center">
                {subjectName} - Module {id}
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
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeAuthModal}
                >
                    <div
                        className="bg-white p-6 rounded-md shadow-md w-full max-w-sm"
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
