import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { UserLoginService } from '../../services/api.service';
import { setToken } from '../../helper/tokenHelper';
import { toast } from 'react-toastify';
import { AiOutlineLoading } from 'react-icons/ai';

const Login = ({ switchToRegister, switchToForgetPassword, closeDialog }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!formData.email) {
            setLoading(false);
            toast.success('Email is required')
            return;
        }
        if (!formData.password) {
            setLoading(false);
            toast.success('Password is required')

            return;
        }

        await UserLoginService({ ...formData }).then((response) => {
            // console.log(response?.data?.user?._id);
            setToken(response?.data?.token);
            localStorage.setItem("name", response?.data?.user?.name);
            localStorage.setItem("email", response?.data?.user?.email);
            setLoading(false);
            toast.success("Logged In Successfully")
            closeDialog();
        }).catch((err) => {
            setLoading(false)
            console.log(err)
        })
    };

    return (
        <>
            <div className=' container flex justify-center items-center'>
                <div className="flex  flex-col bg-black border-2 p-8 w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign In</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-white font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-white font-medium">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                >
                                    {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                                </button>
                            </div>
                            <div className="text-right mt-2">
                                <button
                                    type="button"
                                    onClick={switchToForgetPassword}
                                    className="text-white text-sm hover:underline"
                                >
                                    Forgot Password?
                                </button>
                            </div>

                        </div>

                        <button
                            type="submit"
                            className={`w-full border-2 border-black bg-transparent text-black py-3 rounded-md transition duration-200 flex justify-center items-center`}
                            disabled={loading}
                            style={{ width: '100%', height: '44px' }}
                        >
                            {loading ? (
                                <AiOutlineLoading className="animate-spin mr-2" size={20} />
                            ) : null}
                            {loading ? '' : 'Sign In'}
                        </button>
                    </form>

                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-100">
                            Don’t have an account?{" "}
                            <button
                                onClick={switchToRegister}
                                className="text-white hover:underline"
                            >
                                Register
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
