import { Search, Plus } from "lucide-react";

const JobFilters = () => {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                {/* Filters */}
                <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {/* Search */}
                    <div className="relative">
                        <Search
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            placeholder="Search jobs..."
                            className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Location */}
                    <input
                        type="text"
                        placeholder="Location"
                        className="rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
                    />

                    {/* Job Type */}
                    <select className="rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500">
                        <option>All Types</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Remote</option>
                        <option>Hybrid</option>
                        <option>Internship</option>
                    </select>

                    {/* Status */}
                    <select className="rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500">
                        <option>All Status</option>
                        <option>Open</option>
                        <option>Closed</option>
                        <option>Draft</option>
                    </select>
                </div>

                {/* Add Job Button */}
                <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700">
                    <Plus size={18} />
                    Add Job
                </button>
            </div>
        </div>
    );
};

export default JobFilters;