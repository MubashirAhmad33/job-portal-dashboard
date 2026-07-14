import { Eye, Pencil } from "lucide-react";

const candidates = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        experience: "3 Years",
        status: "Active",
    },
    {
        id: 2,
        name: "Sarah Khan",
        email: "sarah@example.com",
        experience: "5 Years",
        status: "Shortlisted",
    },
    {
        id: 3,
        name: "Sarah Khan",
        email: "sarah@example.com",
        experience: "5 Years",
        status: "Shortlisted",
    },
    {
        id: 4,
        name: "Sarah Khan",
        email: "sarah@example.com",
        experience: "5 Years",
        status: "Shortlisted",
    },
    {
        id: 5,
        name: "Sarah Khan",
        email: "sarah@example.com",
        experience: "5 Years",
        status: "Shortlisted",
    },
];

const CandidateTable = () => {
    return (
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left">Candidate</th>
                            <th className="px-6 py-3 text-left">Email</th>
                            <th className="px-6 py-3 text-left">Experience</th>
                            <th className="px-6 py-3 text-left">Status</th>
                            <th className="px-6 py-3 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {candidates.map((candidate) => (
                            <tr key={candidate.id} className="">
                                <td className="px-6 py-4 font-medium">
                                    {candidate.name}
                                </td>

                                <td className="px-6 py-4">
                                    {candidate.email}
                                </td>

                                <td className="px-6 py-4">
                                    {candidate.experience}
                                </td>

                                <td className="px-6 py-4">
                                    {candidate.status}
                                </td>

                                <td className="px-6 py-4">
                                    <div className="flex justify-center gap-2">
                                        <button className="rounded bg-blue-100 p-2 text-blue-600">
                                            <Eye size={18} />
                                        </button>

                                        <button className="rounded bg-green-100 p-2 text-green-600">
                                            <Pencil size={18} />
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

export default CandidateTable;