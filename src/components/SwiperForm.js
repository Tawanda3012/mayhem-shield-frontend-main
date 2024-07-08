import React, { useState } from 'react';

const SwiperForm = ({ bol }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        companySize: '',
        country: '',
        privacyPolicy: false
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCheckbox = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
        bol(true)

    };

    return (
        <form onSubmit={handleSubmit} className="font-merriweather  bg-white rounded w-full mx-auto p-10">
            <div className="lg:flex  md:flex sm:block justify-between gap-5">
                <div className="mb-4 lg:w-1/2 md:w-1/2 sm:w-full">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className="bg-white border border-rose-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4 lg:w-1/2 md:w-1/2 sm:w-full">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        className="bg-white border border-rose-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="lg:flex  md:flex sm:block justify-between gap-5">
                <div className="mb-4 lg:w-1/2 md:w-1/2 sm:w-full">
                    <label className="block text-gray-700  font-medium mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full bg-white border border-rose-400 rounded-lg py-2 px-4 block  appearance-none leading-normal"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4 lg:w-1/2 md:w-1/2 sm:w-full">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="company">
                        Company
                    </label>
                    <input
                        className="bg-white border border-rose-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="jobTitle">
                    Job Title
                </label>
                <input
                    className="bg-white border border-rose-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="companySize">
                    Company Size
                </label>
                <select
                    className="bg-white border border-rose-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                >
                    <option value="">Select a size</option>
                    <option value="0-500">0-500</option>
                    <option value="500-1000">500-1000</option>
                    <option value="more than 1000">more than 1000</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="country">
                    Country
                </label>
                <input
                    className="bg-white border border-rose-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <input
                    className="form-checkbox h-4 w-4 text-blue-500"
                    type="checkbox"
                    // required
                    id="privacyPolicy"
                    name="privacyPolicy"
                    checked={formData.privacyPolicy}
                    onChange={handleCheckbox}
                />
                <label className="ml-2 text-blue-500 font-medium" htmlFor="privacyPolicy">
                    I accept the <a href="/privacy-policy">privacy policy</a>
                </label>
            </div>

            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Submit
            </button>
        </form>

    );
};

export default SwiperForm;  