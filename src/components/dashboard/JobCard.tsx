interface JobCardProps {
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    status: "Open" | "Closed";
}

const JobCard = ({
    title,
    company,
    location,
    type,
    salary,
    status,
}: JobCardProps) => {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                    <p className="text-sm text-gray-500">{company}</p>
                </div>

                <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${status === "Open"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                        }`}
                >
                    {status}
                </span>
            </div>

            <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>📍 {location}</p>
                <p>💼 {type}</p>
                <p>💰 {salary}</p>
            </div>

            <button className="mt-5 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700 transition">
                View Details
            </button>
        </div>
    );
};

export default JobCard;