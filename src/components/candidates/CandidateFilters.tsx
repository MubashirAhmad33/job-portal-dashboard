import { Search, Plus } from "lucide-react";

const CandidateFilters = () => {
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row">
                <div className="relative flex-1">
                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        placeholder="Search candidate..."
                        className="w-full rounded-lg border py-2.5 pl-10 pr-4 outline-none"
                    />
                </div>

                <input
                    placeholder="Location"
                    className="rounded-lg border px-4 py-2.5"
                />

                <select className="rounded-lg border px-4 py-2.5">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Shortlisted</option>
                    <option>Rejected</option>
                </select>

                <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 text-white">
                    <Plus size={18} />
                    Add Candidate
                </button>
            </div>
        </div>
    );
};

export default CandidateFilters;