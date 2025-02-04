import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import { UserPlagiarismService } from "../../services/api.service";
import { useNavigate } from "react-router-dom";
import { FaFileAlt, FaShieldAlt, FaCheckCircle, FaRobot } from "react-icons/fa";
import Faq from "../faqs/Faq";
import MakepaymentImg from "../../assets/Plagiarism/Makepayment.png";
import FillOuttheFormImg from "../../assets/Plagiarism/FillOuttheForm.png";
import ReceiveYourReportImg from "../../assets/Plagiarism/ReceiveYourReport.png";
import UploadDocumentImg from "../../assets/Plagiarism/UploadDocument.png";

const Plagiarism = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        file: null,
        checkType: "",
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                file: selectedFile,
            }));
        }
    };

    const handleRadioChange = (e) => {
        setFormData({
            ...formData,
            checkType: e.target.value,
        });
    };

    const validateForm = () => {
        let isValid = true;

        if (!formData.name.trim()) {
            toast.error("Name is required.");
            isValid = false;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            toast.error("Valid email is required.");
            isValid = false;
        }
        if (!/^\d{10}$/.test(formData.phone)) {
            toast.error("Valid 10-digit phone number is required.");
            isValid = false;
        }
        if (!formData.message.trim()) {
            toast.error("Message is required.");
            isValid = false;
        }
        if (!formData.file) {
            toast.error("Please upload a valid PDF or Word document.");
            isValid = false;
        }
        if (!formData.checkType) {
            toast.error("Please select a check type.");
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!validateForm()) {
            setLoading(false);
            return;
        }
        const formDataObj = new FormData();
        formDataObj.append("name", formData.name);
        formDataObj.append("email", formData.email);
        formDataObj.append("phone", formData.phone);
        formDataObj.append("message", formData.message);
        // formDataObj.append('checkType', formData.checkType);
        formDataObj.append("checkType", formData.checkType.trim());
        formDataObj.append("file", formData.file);

        try {
            const response = await UserPlagiarismService(formDataObj);
            console.log("API Response:", response);
            navigate("/");
            toast.success(
                response.message || "Plagiarism Test submitted successfully!"
            );
        } catch (error) {
            const errorMessage =
                error?.response?.data?.error || "Something went wrong!";
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const cardData = [
        {
            image: FillOuttheFormImg,
            title: "Fill Out the Form ",
            description:
                "First-time users need to provide their details in a simple form.",
        },
        {
            image: UploadDocumentImg,
            title: "Upload Your Document ",
            description: "Submit the file for plagiarism analysis in .doc/.pdf form.",
        },
        {
            image: MakepaymentImg,
            title: "Make Payment",
            description: "Make a quick payment according to the plan you purchase",
        },
        {
            image: ReceiveYourReportImg,
            title: "Receive Your Report ",
            description:
                "Your detailed plagiarism report will be sent directly to your Gmail/ Whatsapp.",
        },
    ];

    return (
        <>
            <div className="min-h-screen mt-24 md:mt-0 text-white flex items-center justify-center px-2 py-12 sm:px-6 lg:px-8">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side - Form */}
                    <div className=" p-6 ">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
                            Plagiarism Check
                        </h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm sm:text-base lg:text-lg font-medium mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm sm:text-base lg:text-lg font-medium mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm sm:text-base lg:text-lg font-medium mb-2"
                                >
                                    Phone (WhatsApp Number)
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter your WhatsApp number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm sm:text-base lg:text-lg font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Write your message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            {/* File Upload */}
                            <div>
                                <label
                                    htmlFor="file"
                                    className="block text-sm sm:text-base lg:text-lg font-medium mb-2"
                                >
                                    Upload File
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    accept=".pdf,.doc,.docx" // Only allow PDFs and Word docs
                                    onChange={handleFileChange}
                                    className="w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:border-blue-500 file:text-black hover:file:border-blue-600"
                                />
                            </div>

                            {/* Check Type */}
                            <div>
                                <label className="block text-sm sm:text-base lg:text-lg font-medium mb-4">
                                    Select Check Type
                                </label>
                                <div className="space-y-4">
                                    {[
                                        {
                                            id: "plagiarismCheck",
                                            label: "Plagiarism Check - ₹ 30/document",
                                            value: "Plagiarism Check",
                                        },
                                        {
                                            id: "a1Check",
                                            label: "AI Check - ₹ 30/document",
                                            value: "AI Check",
                                        },
                                        {
                                            id: "a1PlusCheck",
                                            label: "AI+ Check - ₹ 40/document",
                                            value: "AI+Check",
                                        },
                                    ].map(({ id, label, value }) => (
                                        <div className="flex items-center" key={id}>
                                            <input
                                                type="radio"
                                                id={id}
                                                name="checkType"
                                                value={value}
                                                checked={formData.checkType === value}
                                                onChange={handleRadioChange}
                                                className="text-blue-500 focus:ring-blue-500"
                                            />
                                            <label
                                                htmlFor={id}
                                                className="ml-2 text-sm sm:text-base lg:text-lg text-white"
                                            >
                                                {label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="w-full h-12 flex items-center justify-center border border-white hover:border-blue-600 text-white font-bold rounded-lg transition-all duration-300"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <AiOutlineLoading3Quarters
                                            className="animate-spin"
                                            size={20}
                                        />
                                    ) : (
                                        "Submit"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="p-6">
                        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center leading-6 mb-8">
                            How It Works For Plagiarism Checking
                        </h2>

                        {/* Grid Layout for Cards */}
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            {cardData.map((card, index) => (
                                <div
                                    key={index}
                                    className="relative bg-gray-800 text-white p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all flex flex-col items-center text-center"
                                >
                                    {/* Card Image */}
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-28 h-28 object-contain mb-4 text-white"
                                    />

                                    {/* Card Title */}
                                    <h3 className="text-xl font-bold">{card.title}</h3>

                                    {/* Card Description */}
                                    <p className="mt-2 text-gray-400">{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl w-full">
                <Faq category="Plagiarism and AI Check" />
            </div>
        </>
    );
};

export default Plagiarism;
