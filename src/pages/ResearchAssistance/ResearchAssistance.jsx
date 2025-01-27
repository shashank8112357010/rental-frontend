import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserResearchService } from "../../services/api.service";

const ResearchAssistance = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format.";
        if (!formData.phone) newErrors.phone = "Phone number is required.";
        if (!formData.message) newErrors.message = "Message is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: "", // Clear field-specific error on change
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!validateForm()) {
            setLoading(false);
            return;
        }

        try {
            const response = await UserResearchService(formData);
            toast.success("Your request has been submitted successfully!");
            console.log(response);
            navigate("/thank-you"); // Navigate to a thank-you page
        } catch (error) {
            toast.error("Failed to submit the form. Please try again.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen mt-24 md:mt-0 bg-black text-white flex items-center justify-center px-4 py-12">
            <div className="max-w-3xl w-full p-2 sm:p-10 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">Research Assistance Form</h2>
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
                            className={`w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.name ? "focus:ring-red-500" : "focus:ring-blue-500"
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
                            className={`w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"
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
                            className={`w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.phone ? "focus:ring-red-500" : "focus:ring-blue-500"
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
                            className={`w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.message ? "focus:ring-red-500" : "focus:ring-blue-500"
                                }`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full border-white border hover:border-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResearchAssistance;
