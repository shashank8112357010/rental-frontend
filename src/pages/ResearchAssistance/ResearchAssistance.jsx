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
        researchArea: "",
        deliveryOption: "",
        paymentOption: "",
        wordCount: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getCalculatedPriceForOption = (wordCount, baseRate) => {
        if (!wordCount || isNaN(wordCount)) return baseRate.toFixed(2);

        let totalPrice;
        if (wordCount <= 1000) {
            totalPrice = baseRate;
        } else {
            totalPrice = baseRate + ((wordCount - 1000) / 1000) * baseRate;
        }

        return totalPrice.toFixed(2);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format.";
        if (!formData.phone) newErrors.phone = "Phone number is required.";
        if (!formData.message) newErrors.message = "Message is required.";
        if (!formData.researchArea) newErrors.researchArea = "Please select an area of research.";
        if (!formData.deliveryOption) newErrors.deliveryOption = "Please select a delivery option.";
        if (!formData.paymentOption) newErrors.paymentOption = "Please select a payment option.";
        if (!formData.wordCount || isNaN(formData.wordCount)) newErrors.wordCount = "Please enter a valid word count.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            const updatedFormData = { ...prev, [name]: value };
            return updatedFormData;
        });
        setErrors((prev) => ({ ...prev, [name]: "" }));
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
                <h2 className="text-3xl font-bold mb-6 text-center">Research Assistance</h2>
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
                            Phone ( WhatsApp Number )
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your whatapp number"
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

                    {/* Word Count */}
                    <div>
                        <label htmlFor="wordCount" className="block text-sm font-medium mb-2">
                            Word Count
                        </label>
                        <input
                            type="number"
                            id="wordCount"
                            name="wordCount"
                            placeholder="Enter the number of words"
                            value={formData.wordCount}
                            onChange={handleChange}
                            className={`w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.wordCount ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
                        />
                        {errors.wordCount && <p className="text-red-500 text-sm mt-1">{errors.wordCount}</p>}
                    </div>


                    <div className="flex justify-between gap-8">
                        {/* Area of Research (Radio Buttons) */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Area of Research</label>
                            <div className="space-y-2">
                                {["Research Paper", "Literature Review", "Presentation Speech", "Critical Analysis", "Case Commentary", "IRAC Analysis", "Book / Movie Review"].map((area, index) => (
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
                            <div>
                                <label className="block text-sm font-medium mb-2">Payment Option</label>
                                <div className="space-y-2">
                                    {[
                                        { label: "Standard", rate: 399 },
                                        { label: "Premium", rate: 599 },
                                    ].map((option, index) => {
                                        const calculatedPrice = getCalculatedPriceForOption(formData.wordCount, option.rate);

                                        return (
                                            <div key={index} className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id={`paymentOption${index}`}
                                                    name="paymentOption"
                                                    value={`${option.label} (${option.rate}/1000 words)`}
                                                    checked={formData.paymentOption === `${option.label} (${option.rate}/1000 words)`}
                                                    onChange={handleChange}
                                                    className="text-blue-500 focus:ring-blue-500"
                                                />
                                                <label htmlFor={`paymentOption${index}`} className="ml-2 text-white">
                                                    {option.label} ({option.rate}/1000 words) - ₹{calculatedPrice}
                                                </label>
                                            </div>
                                        );
                                    })}
                                </div>
                                {errors.paymentOption && <p className="text-red-500 text-sm mt-1">{errors.paymentOption}</p>}
                            </div>

                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-8">
                        <button
                            type="submit"
                            className=" border-white border hover:border-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
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

export default ResearchAssistance;
