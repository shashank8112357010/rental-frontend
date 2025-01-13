import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserRegisterService } from '../../services/api.service';
import { toast } from 'react-toastify';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { AiOutlineLoading } from 'react-icons/ai';


const Register = ({ switchToLogin }) => {
    const [formData, setFormData] = useState({ email: '', name: '', phone: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!formData.email || !formData.name || !formData.phone || !formData.password) {
            setLoading(false);
            return;
        }

        // Validate email format
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setLoading(false);
            toast.success('Invalid email format')
            return;
        }
        setLoading(true)
        await UserRegisterService(formData).then((response) => {
            console.log(response)
            setLoading(false);
            toast.success("Signup successful!")
            localStorage.setItem("name", formData.name);
            localStorage.setItem("email", formData.email);
            switchToLogin();
        }).catch((err) => {
            setLoading(false);
            console.log(err)
        })

    };

    return (
        <div className='container flex justify-center items-center'>
            <div className="flex flex-col bg-white p-8 w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-black font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            placeholder="Name"
                        />
                    </div>

                    <div>
                        <label className="block text-black font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            placeholder=" your Email"
                        />
                    </div>

                    <div>
                        <label className="block text-black font-medium">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            placeholder="Your phone number"
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
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                placeholder="Your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                            >
                                {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={`w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-500 transition duration-200 flex justify-center items-center`}
                        disabled={loading}
                    >
                        {loading ? (
                            <AiOutlineLoading className="animate-spin mr-2" size={20} />
                        ) : null}
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <button
                            onClick={switchToLogin}
                            className="text-blue-500 hover:underline"
                        >
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
