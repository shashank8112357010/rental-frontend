import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { UserLoginService } from '../../services/api.service';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!formData.email) {
            setLoading(false);
            // ToastMessage(true, 'Email is required');
            return;
        }
        if (!formData.password) {
            setLoading(false);
            // ToastMessage(true, 'Password is required');
            return;
        }

        try {
            const response = await UserLoginService({ ...formData });
            console.log(response)
            // setToken(response?.data?.token);
            // localStorage.setItem("name", response?.data?.user?.name);
            // setLoading(false);
            // ToastMessage(false, 'Logged In Successfully');
            // navigate('/');
        } catch (err) {
            // ToastMessage(true, err?.response?.data?.message || "Server Error");
            setLoading(false);
        }
    };

    return (
        <>
            <div className=' container flex justify-center items-center'>
                <div className="flex  flex-col bg-white p-8 w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-black font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-black font-medium">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition duration-200"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="text-center mt-6">
                        {/* <button className="text-blue-500 hover:underline">Forgot Password?</button> */}
                        <p className="text-sm text-gray-600">
                            Don’t have an account?{" "}
                            <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
