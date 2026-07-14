const jobs = [
    {
        id: 1,
        title: "Frontend React Developer",
        company: "Google",
        location: "Lahore",
        type: "Full Time",
        status: "Open",
        posted: "10 Jul 2026",
    },
    {
        id: 2,
        title: "Backend Node.js Developer",
        company: "Microsoft",
        location: "Islamabad",
        type: "Remote",
        status: "Open",
        posted: "08 Jul 2026",
    },
    {
        id: 3,
        title: "UI/UX Designer",
        company: "Adobe",
        location: "Karachi",
        type: "Hybrid",
        status: "Closed",
        posted: "05 Jul 2026",
    },
    {
        id: 4,
        title: "Full Stack Developer",
        company: "Netflix",
        location: "Remote",
        type: "Full Time",
        status: "Draft",
        posted: "02 Jul 2026",
    },
];

const JobTable = () => {
    const badgeColor = (status: string) => {
        switch (status) {
            case "Open":
                return "bg-green-100 text-green-700";
            case "Closed":
                return "bg-red-100 text-red-700";
            case "Draft":
                return "bg-yellow-100 text-yellow-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Job Listings
                </h2>

                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    + Add Job
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr className="text-left text-sm text-gray-600">
                            <th className="px-6 py-3">Job Title</th>
                            <th className="px-6 py-3">Company</th>
                            <th className="px-6 py-3">Location</th>
                            <th className="px-6 py-3">Type</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Posted</th>
                            <th className="px-6 py-3 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {jobs.map((job) => (
                            <tr
                                key={job.id}
                                className="border-t border-gray-100 hover:bg-gray-50"
                            >
                                <td className="px-6 py-4 font-medium text-gray-800">
                                    {job.title}
                                </td>

                                <td className="px-6 py-4 text-gray-600">
                                    {job.company}
                                </td>

                                <td className="px-6 py-4 text-gray-600">
                                    {job.location}
                                </td>

                                <td className="px-6 py-4 text-gray-600">
                                    {job.type}
                                </td>

                                <td className="px-6 py-4">
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-medium ${badgeColor(
                                            job.status
                                        )}`}
                                    >
                                        {job.status}
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-gray-600">
                                    {job.posted}
                                </td>

                                <td className="px-6 py-4">
                                    <div className="flex justify-center gap-2">
                                        <button className="rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-600 hover:bg-blue-200">
                                            Edit
                                        </button>

                                        <button className="rounded-md bg-red-100 px-3 py-1 text-sm text-red-600 hover:bg-red-200">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobTable;