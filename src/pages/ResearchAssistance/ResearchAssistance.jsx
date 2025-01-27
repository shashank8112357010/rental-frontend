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
        researchArea: "", // Research area selection
        deliveryOption: "", // Delivery option selection
        paymentOption: "", // Payment option selection
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
        if (!formData.researchArea) newErrors.researchArea = "Please select an area of research.";
        if (!formData.deliveryOption) newErrors.deliveryOption = "Please select a delivery option.";
        if (!formData.paymentOption) newErrors.paymentOption = "Please select a payment option."; // Validation for payment option

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
            navigate("/thank-you");
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
                            className={`w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.name ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
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
                            className={`w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
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
                            className={`w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.phone ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
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
                            className={`w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.message ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <div className="flex justify-between gap-8">
                        {/* Area of Research (Radio Buttons) */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Area of Research</label>
                            <div className="space-y-2">
                                {["Research", "Review", "Presentation Speech", "Critical Analysis", "Case Commentary", "IRAC Analysis", "Book / Movie Review"].map((area, index) => (
                                    <div key={index} className="flex items-center">
                                        <input
                                            type="radio"
                                            id={`researchArea${index}`}
                                            name="researchArea"
                                            value={area}
                                            checked={formData.researchArea === area}
                                            onChange={handleChange}
                                            className="text-blue-500 focus:ring-blue-500"
                                        />
                                        <label htmlFor={`researchArea${index}`} className="ml-2 text-white">{area}</label>
                                    </div>
                                ))}
                            </div>
                            {errors.researchArea && <p className="text-red-500 text-sm mt-1">{errors.researchArea}</p>}
                        </div>

                        <div className="flex flex-col gap-12">
                            {/* Delivery Options (Radio Buttons) */}
                            <div>
                                <label className="block text-sm font-medium mb-2">Delivery Options</label>
                                <div className="space-y-2">
                                    {["Standard Delivery within 72 Hours", "Express Delivery within 12 Hours"].map((delivery, index) => (
                                        <div key={index} className="flex items-center">
                                            <input
                                                type="radio"
                                                id={`deliveryOption${index}`}
                                                name="deliveryOption"
                                                value={delivery}
                                                checked={formData.deliveryOption === delivery}
                                                onChange={handleChange}
                                                className="text-blue-500 focus:ring-blue-500"
                                            />
                                            <label htmlFor={`deliveryOption${index}`} className="ml-2 text-white">{delivery}</label>
                                        </div>
                                    ))}
                                </div>
                                {errors.deliveryOption && <p className="text-red-500 text-sm mt-1">{errors.deliveryOption}</p>}
                            </div>

                            {/* Payment Options */}
                            <div className="">
                                <label className="block text-sm font-medium mb-2">Payment Option</label>
                                <div className="space-y-2">
                                    {["Standard (399/1000 words)", "Premium (599/1000 words)"].map((payment, index) => (
                                        <div key={index} className="flex items-center">
                                            <input
                                                type="radio"
                                                id={`paymentOption${index}`}
                                                name="paymentOption"
                                                value={payment}
                                                checked={formData.paymentOption === payment}
                                                onChange={handleChange}
                                                className="text-blue-500 focus:ring-blue-500"
                                            />
                                            <label htmlFor={`paymentOption${index}`} className="ml-2 text-white">{payment}</label>
                                        </div>
                                    ))}
                                </div>
                                {errors.paymentOption && <p className="text-red-500 text-sm mt-1">{errors.paymentOption}</p>}
                            </div>
                        </div>
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
