import React from 'react'

const JobForm = () => {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Job Information
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                    Fill in the details below to create or update a job posting.
                </p>
            </div>

            <form className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Job Title
                        </label>
                        <input
                            type="text"
                            placeholder="Frontend React Developer"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Company
                        </label>
                        <input
                            type="text"
                            placeholder="Google"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            type="text"
                            placeholder="Lahore, Pakistan"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Salary
                        </label>
                        <input
                            type="text"
                            placeholder="PKR 150,000"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Job Type
                        </label>
                        <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500">
                            <option>Full Time</option>
                            <option>Part Time</option>
                            <option>Remote</option>
                            <option>Hybrid</option>
                            <option>Internship</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Status
                        </label>
                        <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500">
                            <option>Open</option>
                            <option>Closed</option>
                            <option>Draft</option>
                        </select>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Job Description
                    </label>

                    <textarea
                        rows={6}
                        placeholder="Write the job description..."
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3">
                    <button
                        type="button"
                        className="rounded-lg border border-gray-300 px-5 py-2.5 font-medium text-gray-700 hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
                    >
                        Save Job
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JobForm;

