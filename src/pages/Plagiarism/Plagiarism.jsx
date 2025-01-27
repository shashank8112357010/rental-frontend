import React, { useState } from 'react';

const Plagiarism = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        file: null,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const validateForm = () => {
        const newErrors = {
            name: formData.name.trim() ? null : 'Name is required.',
            email: /\S+@\S+\.\S+/.test(formData.email) ? null : 'Valid email is required.',
            phone: /^\d{10}$/.test(formData.phone) ? null : 'Valid 10-digit phone number is required.',
            message: formData.message.trim() ? null : 'Message is required.',
            file: formData.file ? null : 'File upload is required.',
        };

        const filteredErrors = Object.fromEntries(
            Object.entries(newErrors).filter(([_, value]) => value !== null)
        );

        setErrors(filteredErrors);
        return Object.keys(filteredErrors).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
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
            });
            setErrors({});
        }
    };

    return (
        <div className="min-h-screen  mt-24 md:mt-0 text-white flex items-center justify-center px-4 sm:px-2 py-12">
            <div className="max-w-4xl w-full p-2 sm:p-10 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">Plagiarism Check Form</h2>
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
                            className={`w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                                }`}
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
                            className={`w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                                }`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.phone ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                                }`}
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
                            className={`w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.message ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                                }`}
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
                            className={`w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:border-blue-500 file:text-black hover:file:border-blue-600 ${errors.file ? 'focus:ring-red-500' : ''
                                }`}
                        />
                        {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full border-white border hover:border-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Plagiarism;
