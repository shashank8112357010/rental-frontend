import React, { useState } from 'react';
import { UserEnquiryService } from '../services/api.service';
import { toast } from 'react-toastify';

const EnquiryFormPage = ({ vehicleId, vehicleType }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        enquire: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form data
        if (!formData.name || !formData.email || !formData.phone || !formData.enquire) {
            toast.success('All fields are required.');
            return;
        }

        setIsSubmitting(true);
        setErrorMessage('');

        // Prepare data for the API call
        const enquiryData = {
            ...formData,
            serviceId: vehicleId,
            itemType: vehicleType,
        };

        // Make API call to submit the enquiry
        UserEnquiryService(enquiryData)
            .then((response) => {
                toast.success('Enquiry submitted successfully!');
                console.log('Enquiry Response:', response.data);
                setIsSubmitting(false);
            })
            .catch((error) => {
                setErrorMessage('An error occurred while submitting the enquiry. Please try again.');
                console.error('Enquiry Error:', error);
                setIsSubmitting(false);
            });
    };

    return (
        <div className="no-scrollbar flex justify-center items-center py-8">
            <div className="w-full sm:w-[500px] px-4 py-8 bg-white rounded-lg">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Enquiry Form</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                        <div className="text-red-500 text-center mb-4">{errorMessage}</div>
                    )}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleFormChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Enquire</label>
                        <textarea
                            name="enquire"
                            value={formData.enquire}
                            onChange={handleFormChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnquiryFormPage;
