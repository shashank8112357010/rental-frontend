import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineLoading } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ForgetPassword = ({ switchToLogin }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!email) {
            toast.error('Email is required');
            setLoading(false);
            return;
        }

        // Handle the password reset logic here.
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            toast.success('Password reset email sent');
            switchToLogin();
        } catch (err) {
            toast.error('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container flex justify-center items-center">
            <div className="flex flex-col bg-white p-8 w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Forget Password</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-black font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Enter your email"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-black text-white py-3 rounded-md hover:bg-black transition duration-200 flex justify-center items-center`}
                        disabled={loading}
                    >
                        {loading ? (
                            <AiOutlineLoading className="animate-spin mr-2" size={20} />
                        ) : 'Reset Password'}
                    </button>
                </form>
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        Remembered your password?{' '}
                        <button
                            onClick={switchToLogin}
                            className="text-blue-500 hover:underline"
                        >
                            Sign In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
