const applications = [
    {
        id: 1,
        name: "John Doe",
        position: "Frontend React Developer",
        status: "Pending",
    },
    {
        id: 2,
        name: "Sarah Khan",
        position: "UI/UX Designer",
        status: "Reviewed",
    },
    {
        id: 3,
        name: "Ali Ahmed",
        position: "Backend Node.js Developer",
        status: "Shortlisted",
    },
    {
        id: 4,
        name: "Emily Watson",
        position: "Full Stack Developer",
        status: "Rejected",
    },
];

const statusColor = (status: string) => {
    switch (status) {
        case "Pending":
            return "bg-yellow-100 text-yellow-700";
        case "Reviewed":
            return "bg-blue-100 text-blue-700";
        case "Shortlisted":
            return "bg-green-100 text-green-700";
        case "Rejected":
            return "bg-red-100 text-red-700";
        default:
            return "bg-gray-100 text-gray-700";
    }
};

const RecentApplications = () => {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
            <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                    Recent Applications
                </h2>

                <button className="text-sm font-medium text-blue-600 hover:underline">
                    View All
                </button>
            </div>

            <div className="space-y-4">
                {applications.map((application) => (
                    <div
                        key={application.id}
                        className="flex items-center justify-between rounded-lg border border-gray-100 p-4 hover:bg-gray-50 transition"
                    >
                        <div>
                            <h3 className="font-medium text-gray-800">
                                {application.name}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {application.position}
                            </p>
                        </div>

                        <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor(
                                application.status
                            )}`}
                        >
                            {application.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentApplications;