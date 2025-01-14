import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggleNewPasswordVisibility = () => setShowNewPassword(!showNewPassword);
    const toggleConfirmPasswordVisibility = () =>
        setShowConfirmPassword(!showConfirmPassword);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validation checks
        if (!newPassword || !confirmPassword) {
            toast.error("All fields are required");
            setLoading(false);
            return;
        }
        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            // Simulated API call (replace this with your actual API logic)
            await new Promise((resolve) => setTimeout(resolve, 2000));
            toast.success("Password successfully updated");
        } catch (error) {
            toast.error("Failed to reset password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-[550px] p-12 bg-black">
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
                <h2 className="text-3xl font-bold text-center text-[#000] mb-6">
                    Reset Your Password
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* New Password Input */}
                    <div className="mb-4 relative">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            htmlFor="newPassword"
                        >
                            New Password
                        </label>
                        <input
                            type={showNewPassword ? "text" : "password"}
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000] focus:border-transparent sm:text-sm"
                            placeholder="Enter your new password"
                        />
                        <button
                            type="button"
                            onClick={toggleNewPasswordVisibility}
                            className="absolute top-9 right-3 flex items-center text-gray-500 focus:outline-none"
                        >
                            {showNewPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="mb-6 relative">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            htmlFor="confirmPassword"
                        >
                            Confirm Password
                        </label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000] focus:border-transparent sm:text-sm"
                            placeholder="Confirm your password"
                        />
                        <button
                            type="button"
                            onClick={toggleConfirmPasswordVisibility}
                            className="absolute top-9 right-3 flex items-center text-gray-500 focus:outline-none"
                        >
                            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>

                    {/* Change Password Button */}
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full bg-[#000] hover:bg-gray-800 text-white py-2 px-4 rounded-md font-semibold text-sm shadow-md transition duration-300"
                    >
                        {loading ? (
                            <div className="flex items-center">
                                <span className="loader mr-2"></span>Changing Password...
                            </div>
                        ) : (
                            "Change Password"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
