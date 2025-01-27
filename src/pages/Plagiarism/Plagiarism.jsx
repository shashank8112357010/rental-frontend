import React, { useState } from 'react';
import { AiOutlineLoading, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { ImSpinner2 } from 'react-icons/im';

const Plagiarism = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        file: null,
        checkType: '', // To store selected check type
    });
    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleRadioChange = (e) => {
        setFormData({
            ...formData,
            checkType: e.target.value, // Set the selected check type
        });
    };

    const validateForm = () => {
        const newErrors = {
            name: formData.name.trim() ? null : 'Name is required.',
            email: /\S+@\S+\.\S+/.test(formData.email) ? null : 'Valid email is required.',
            phone: /^\d{10}$/.test(formData.phone) ? null : 'Valid 10-digit phone number is required.',
            message: formData.message.trim() ? null : 'Message is required.',
            file: formData.file ? null : 'File upload is required.',
            checkType: formData.checkType ? null : 'Please select a check type.', // Validation for check type
        };

        const filteredErrors = Object.fromEntries(
            Object.entries(newErrors).filter(([_, value]) => value !== null)
        );

        setErrors(filteredErrors);
        return Object.keys(filteredErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        if (validateForm()) {
            console.log('Form Data:', formData);
            alert('Form submitted successfully!');
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                file: null,
                checkType: '',
            });
            setErrors({});
        }
    };

    return (
        <div className="min-h-screen mt-24 md:mt-0 text-white flex items-center justify-center px-4 sm:px-2 py-12">
            <div className="max-w-4xl w-full p-2 sm:p-10 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">Plagiarism Check </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone ( WhatsApp Number )
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your whatsapp  number"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.phone ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Write your message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.message ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    {/* File Upload */}
                    <div>
                        <label htmlFor="file" className="block text-sm font-medium mb-2">
                            Upload File
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleChange}
                            className={`w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:border-blue-500 file:text-black hover:file:border-blue-600 ${errors.file ? 'focus:ring-red-500' : ''}`}
                        />
                        {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file}</p>}
                    </div>

                    {/* Check Type (Radio Buttons) */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Select Check Type</label>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="plagiarismCheck"
                                    name="checkType"
                                    value="Plagiarism Check - ₹ 30/ document"
                                    checked={formData.checkType === "Plagiarism Check - ₹ 30/ document"}
                                    onChange={handleRadioChange}
                                    className="text-blue-500 focus:ring-blue-500"
                                />
                                <label htmlFor="plagiarismCheck" className="ml-2 text-white">
                                    Plagiarism Check - ₹ 30/ document
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="a1Check"
                                    name="checkType"
                                    value="AI Check - ₹ 30/ document"
                                    checked={formData.checkType === "AI Check - ₹ 30/ document"}
                                    onChange={handleRadioChange}
                                    className="text-blue-500 focus:ring-blue-500"
                                />
                                <label htmlFor="a1Check" className="ml-2 text-white">
                                    AI Check - ₹ 30/ document
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="a1PlusCheck"
                                    name="checkType"
                                    value="AI+ Check - ₹ 30/ document"
                                    checked={formData.checkType === "AI+ Check - ₹ 30/ document"}
                                    onChange={handleRadioChange}
                                    className="text-blue-500 focus:ring-blue-500"
                                />
                                <label htmlFor="a1PlusCheck" className="ml-2 text-white">
                                    AI+ Check - ₹ 40/ document
                                </label>
                            </div>
                        </div>
                        {errors.checkType && <p className="text-red-500 text-sm mt-1">{errors.checkType}</p>}
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="border-white border text-center hover:border-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                            disabled={loading}
                            style={{ width: '100%', height: '44px' }}
                        >
                            {loading ? (
                                <AiOutlineLoading3Quarters className="animate-spin text-center text-white" size={20} />
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Plagiarism;
