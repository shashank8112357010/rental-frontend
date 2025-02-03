import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { UserResearchService } from "../../services/api.service";
import { FaFileAlt, FaShieldAlt, FaCheckCircle, FaRobot } from 'react-icons/fa';
import Faq from "../faqs/Faq";


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
        let isValid = true;

        if (!formData.name) {
            toast.error("Name is required.");
            isValid = false;
        }
        if (!formData.email) {
            toast.error("Email is required.");
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            toast.error("Invalid email format.");
            isValid = false;
        }
        if (!formData.phone) {
            toast.error("Phone number is required.");
            isValid = false;
        }
        if (!formData.message) {
            toast.error("Message is required.");
            isValid = false;
        }
        if (!formData.researchArea) {
            toast.error("Please select an area of research.");
            isValid = false;
        }
        if (!formData.deliveryOption) {
            toast.error("Please select a delivery option.");
            isValid = false;
        }
        if (!formData.paymentOption) {
            toast.error("Please select a payment option.");
            isValid = false;
        }
        if (!formData.wordCount || isNaN(formData.wordCount)) {
            toast.error("Please enter a valid word count.");
            isValid = false;
        }

        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!validateForm()) {
            setLoading(false);
            return;
        }

        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            wordCount: formData.wordCount,
            researchType: formData.researchArea,
            deliveryOption: formData.deliveryOption,
            paymentOption: formData.paymentOption.split(' ')[0],
            amount: parseFloat(getCalculatedPriceForOption(formData.wordCount, formData.paymentOption === "Standard" ? 399 : 599)),
        };

        try {
            const response = await UserResearchService(payload);
            const SuccessMessage = response.data?.message;
            toast.success(SuccessMessage);
            navigate('/')
        } catch (error) {
            const errorMessage = error?.response?.data?.message || "Something went wrong!";
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };


    const cardData = [
        { icon: <FaFileAlt size={40} />, title: "Fill Out the Form ", description: "First-time users need to provide their details in a simple form." },
        { icon: <FaShieldAlt size={40} />, title: "Select the Type of Work ", description: "Choose the kind of assistance you need: Blog, Case Brief, Research Paper, etc." },
        { icon: <FaCheckCircle size={40} />, title: "Provide the Topic Name ", description: "Share the topic or area of focus for your research." },
        { icon: <FaRobot size={40} />, title: "Select Your Plan ", description: "Choose between Standard or Premium based on your needs." },
        { icon: <FaCheckCircle size={40} />, title: "Make Payment", description: "Complete the payment securely through our portal." },
        { icon: <FaRobot size={40} />, title: "Receive Your File  ", description: "Your professionally prepared file will be delivered directly to your Gmail/ Whatsapp" }
    ];

    return (
        <>
            <div className="min-h-screen mt-24 md:mt-0 bg-black text-white flex items-center justify-center px-2 py-12 sm:py-8 md:py-12 lg:py-16">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side - Form */}
                    <div className=" p-6 ">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Research Assistance</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>

                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm sm:text-base font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm sm:text-base font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-sm sm:text-base font-medium mb-2">
                                    Phone ( WhatsApp Number )
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter your WhatsApp number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm sm:text-base font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Write your message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            {/* Word Count */}
                            <div>
                                <label htmlFor="wordCount" className="block text-sm sm:text-base font-medium mb-2">
                                    Word Count
                                </label>
                                <input
                                    type="number"
                                    id="wordCount"
                                    name="wordCount"
                                    placeholder="Enter the number of words"
                                    value={formData.wordCount}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-wrap justify-between gap-8">
                                {/* Area of Research (Radio Buttons) */}
                                <div className="">
                                    <label className="block text-sm sm:text-base font-medium mb-2">Area of Research</label>
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
                                </div>

                                <div>
                                    {/* Delivery Options */}
                                    <div className="">
                                        <label className="block text-sm sm:text-base font-medium mb-2">Delivery Options</label>
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
                                    </div>
                                    {/* Payment Options */}
                                    <div className="w-full mt-8">
                                        <label className="block text-sm sm:text-base font-medium mb-2">Payment Option</label>
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
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center pt-8">
                                <button
                                    type="submit"
                                    className="border-white border hover:border-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 w-full"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <AiOutlineLoading3Quarters className="animate-spin text-center text-white" size={20} />
                                    ) : (
                                        "Submit"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className=" p-6 ">
                        <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center leading-6  mb-8">How It Works For Research Assistance</h3>
                        {/* Right Side - 3D Cards */}
                        <div className="grid grid-cols-2 gap-6">



                            {cardData.map((card, index) => (
                                <div key={index} className="relative bg-gray-800 text-white p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all flex flex-col items-center text-center">
                                    <div className="mb-4 text-blue-400">{card.icon}</div>
                                    <h3 className="text-xl font-bold">{card.title}</h3>
                                    <p className="mt-2 text-gray-400">{card.description}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <div className="max-w-6xl w-full">
                <Faq category="Research Assistance" />
            </div>
        </>

    );
};

export default ResearchAssistance;
