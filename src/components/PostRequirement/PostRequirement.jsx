import React, { useState } from 'react';
import { UserRequirementService } from '../../services/api.service';
import { toast } from 'react-toastify';
import Loader from '../loder/Loader';

const PostRequirement = ({ closeDialog }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        requirement: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        requirement: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!formData.name) {
            formErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Valid email is required';
            isValid = false;
        }

        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
            formErrors.phone = 'Phone number must be 10 digits';
            isValid = false;
        }

        if (!formData.requirement) {
            formErrors.requirement = 'Requirement is required';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            setErrorMessage('');
            setSuccessMessage('');

            // Call the API service to post the requirement
            try {
                const response = await UserRequirementService(formData);
                toast.success('Requirement submitted successfully!');
                console.log('Response:', response);
                closeDialog();
            } catch (error) {
                setErrorMessage('Failed to submit the requirement. Please try again later.');
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className=' container flex justify-center items-center'>
            <div className="flex flex-col bg-black border-2 text-white p-8 w-96">
                <h2 className="text-xl font-semibold mb-4">Post a Requirement</h2>

                {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 text-xs">{successMessage}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-white">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 bg-transparent text-gray-700 border border-gray-300 rounded-md"
                            placeholder="Name"
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 bg-transparent border border-gray-300 rounded-md"
                            placeholder="Enter Your email"
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-white">
                            Phone
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 bg-transparent border border-gray-300 rounded-md"
                            placeholder="Your phone number"
                        />
                        {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="requirement" className="block text-sm font-medium text-white">
                            Requirement
                        </label>
                        <textarea
                            id="requirement"
                            name="requirement"
                            value={formData.requirement}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 bg-transparent border border-gray-300 rounded-md"
                            rows="4"
                            placeholder="Your reuirement"
                        ></textarea>
                        {errors.requirement && <p className="text-red-500 text-xs">{errors.requirement}</p>}
                    </div>

                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={closeDialog}
                            className="px-6 py-2 text-sm border-2 rounded-md transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="px-6 py-2 text-sm border-2 text-white rounded-md  transition"
                            style={{ width: '40%', height: '42px' }}
                        >
                            {isLoading ? <Loader /> : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostRequirement;
